import path from 'path';

// Example paths for demonstration
const filePath = '/home/user/Documents/file.txt';
const directoryPath = '/home/user/Documents';
const relativePath = '../otherFolder';

// 1. Getting the basename of a file path
const fileName = path.basename(filePath);
console.log(`1. File name: ${fileName}`);

// Output: File name: file.txt

// 2. Getting the directory name from a path
const directoryName = path.dirname(filePath);
console.log(`2. Directory name: ${directoryName}`);

// Output: Directory name: /home/user/Documents

// 3. Checking if a path is absolute 
// (i.e., starts with the root directory)
const isAbsolute = path.isAbsolute(filePath);
console.log(`3. Is absolute path? ${isAbsolute}`);

// Output: Is absolute path? true

// 4. Constructing a file path from segments
const constructedPath = path.join(directoryPath, 'newFile.txt');
console.log(`4. Constructed path: ${constructedPath}`);

// Output: Constructed path: /home/user/Documents/newFile.txt

// 5. Resolving a path to an absolute path
const resolvedPath = path.resolve('example.js');
console.log(`5. Resolved path: ${resolvedPath}`);

// Output: Resolved path: /current/working/directory/example.js
// (This depends on the current working directory)

// 6. Normalizing a path
const normalizedPath = path.normalize('/home/user/dir/../Documents/./file.txt');
console.log(`6. Normalized path: ${normalizedPath}`);

// Output: Normalized path: /home/user/Documents/file.txt

// 7. Getting the extension of a file path
const fileExtension = path.extname(filePath);
console.log(`7. File extension: ${fileExtension}`);

// Output: File extension: .txt

// 8. Checking if paths are the same
const path1 = '/home/user/Documents/file.txt';
const path2 = '/home/user/documents/FILE.TXT';
const pathsAreSame = path.relative(path1, path2) === '';
console.log(`8. Paths are the same? ${pathsAreSame}`);

// Output: Paths are the same? true


// 9. Getting path components in an object
const pathObject = path.parse(filePath);
console.log('10. Path object:', pathObject);

// Output:
// Path object: {
//   root: '/',
//   dir: '/home/user/Documents',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// 10. Formatting a path object back into a path string
const formattedPath = path.format({
  root: '/',
  dir: '/home/user/Documents',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
});
console.log(`11. Formatted path: ${formattedPath}`);

// Output: Formatted path: /home/user/Documents/file.txt

// 11. Resolving relative paths 
const resolvedRelativePath = path.resolve(directoryPath, relativePath);
console.log(`12. Resolved relative path: ${resolvedRelativePath}`);

// Output: Resolved relative path: /home/user/otherFolder

// 12. Joining paths with platform-specific separators
const joinedPath = path.win32.join('C:\\', 'Users', 'username', 'Documents', 'file.txt');
console.log(`13. Platform specific joined path: ${joinedPath}`);

// Output (on Windows): Platform specific joined path: C:\Users\username\Documents\file.txt

// Summary: The `path` module in Node.js offers extensive functionalities for manipulating, parsing, and working with file paths in a cross-platform manner. It provides essential utilities for path operations, including path normalization, parsing into components, resolving paths, checking path properties, and more.

// Further reading: https://nodejs.org/api/path.html
