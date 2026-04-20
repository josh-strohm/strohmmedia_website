const fs = require('fs');
const path = 'public/index.html';
try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
        console.log('Successfully deleted ' + path);
    } else {
        console.log(path + ' does not exist');
    }
} catch (err) {
    console.error(err);
}
