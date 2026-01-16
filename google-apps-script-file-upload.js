/**
 * Google Apps Script for Tunisian Campers File Upload
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Copy this entire code into Code.gs
 * 4. Replace FOLDER_ID with your Google Drive folder ID
 * 5. Deploy as Web App:
 *    - Click "Deploy" > "New deployment"
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 6. Copy the Web App URL and paste it in questionnaire-diagnostic.html
 *
 * HOW TO GET FOLDER ID:
 * 1. Open Google Drive
 * 2. Create or open the folder where files should be uploaded
 * 3. The URL will be: https://drive.google.com/drive/folders/XXXXX
 * 4. The XXXXX part is your FOLDER_ID
 */

// ═══════════════════════════════════════════════════════════════
// CONFIGURATION - REPLACE THIS WITH YOUR FOLDER ID
// ═══════════════════════════════════════════════════════════════
const FOLDER_ID = 'YOUR_GOOGLE_DRIVE_FOLDER_ID';

// ═══════════════════════════════════════════════════════════════
// MAIN FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Handle POST requests (file uploads)
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const results = [];

    // Get the target folder
    const folder = DriveApp.getFolderById(FOLDER_ID);

    // Create a subfolder for this submission with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const submissionFolder = folder.createFolder(`Diagnostic_${timestamp}`);

    // Process each file
    if (data.files && Array.isArray(data.files)) {
      for (const fileData of data.files) {
        const result = saveFile(submissionFolder, fileData);
        results.push(result);
      }
    }

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: `${results.length} fichier(s) téléchargé(s) avec succès`,
        folderUrl: submissionFolder.getUrl(),
        files: results
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Tunisian Campers File Upload API is running',
      version: '1.0'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Save a single file to the folder
 */
function saveFile(folder, fileData) {
  const { name, type, content } = fileData;

  // Decode base64 content
  const decodedContent = Utilities.base64Decode(content);
  const blob = Utilities.newBlob(decodedContent, type, name);

  // Create the file in the folder
  const file = folder.createFile(blob);

  return {
    name: file.getName(),
    url: file.getUrl(),
    size: file.getSize()
  };
}

/**
 * Test function - run this to verify folder access
 */
function testFolderAccess() {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    Logger.log('Folder found: ' + folder.getName());
    Logger.log('Folder URL: ' + folder.getUrl());
    return true;
  } catch (error) {
    Logger.log('Error accessing folder: ' + error.toString());
    Logger.log('Make sure you have replaced FOLDER_ID with your actual folder ID');
    return false;
  }
}
