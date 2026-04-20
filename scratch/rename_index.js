const fs = require('fs');
const oldPath = 'public/index.html';
const newPath = 'public/ai-assessment-backup.html';
try {
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log('Successfully renamed ' + oldPath + ' to ' + newPath);
    } else {
        console.log(oldPath + ' does not exist');
    }
} catch (err) {
    console.error(err);
}
