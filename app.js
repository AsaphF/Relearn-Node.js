// Variáveis globais
console.log(__dirname)
console.log(__filename)

global.myVariable = 'Hello World';

// Access the global variable
console.log(myVariable); // Output: Hello World

/* 
 - Global Variables Best Practices
 
 1. Minimize Usage: Global variables should be used sparingly. Whenever possible, prefer passing values as function arguments or using module-level variables within a module's scope.

 2. Explicit Naming: If you do use global variables, choose clear and descriptive names to minimize the risk of naming conflicts and to enhance code readability.

 3. Avoid Polluting the Global Namespace: In Node.js, the global object is referred to as global. To avoid polluting the global namespace, consider attaching your variables to the global object explicitly:

 4. Module-Level State: Whenever possible, encapsulate your state within modules. Node.js modules provide a level of encapsulation that helps prevent unintended interactions between different parts of your code.

 5. Configuration Settings: Global variables can be used for configuration settings that need to be accessed from multiple parts of your application. Consider using a single module to manage these configuration values.

 6. Singleton Pattern: Create a singleton pattern using a module to manage shared resources or state. This allows you to centralize access to shared resources and maintain control over how they are used.

 7. Use Constants: If your global variable is intended to hold a constant value, consider using uppercase letters for the variable name to indicate that it's a constant.

 8. Dependency Injection: If your application requires global settings or services, consider using dependency injection to pass these settings into your modules. This approach promotes modularity and testability.

 **Remember that the primary goal of these best practices is to make your code more maintainable, readable, and less prone to bugs. While global variables can be useful in some scenarios, using them without careful consideration can lead to difficult-to-debug issues in larger applications. Always strive to keep your codebase organized and modular.

 */

 // Modules just work exactly as i remenber

 // Built-in Modules :

 // 1. os
 // Work with the Operating System 
 const os = require('os')
 
 // Get the current user
 const user = os.userInfo()
 console.log()

 // Return the user uptime in seconds
// Get system uptime in seconds
const uptimeInSeconds = os.uptime();

// Convert uptime to minutes
const uptimeInMinutes = uptimeInSeconds / 60;
const uptimeInHour = uptimeInMinutes / 60;

console.log(uptimeInHour)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)
 // 2. path
 // Modulo responsáveis pelos caminhos dos arquivos
 console.log(path.sep) // Mostra o separador de arquivos usado pelo OS

 const filePath = path.join('/content', 'subfolder', 'test.txt') // Junta diferentes partes em um caminho
 console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))
 const base = path.basename(filePath) // pega o arquivo da base do caminho
 const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

/* 
Vai printar :
{
  fileName: 'app.js',
  folderName: '/mnt/c/Desktop/NodeJSTut',
  fileExtension: '.js',
  absoluteOrNot: true,
  detailInfo: {
    root: '/',
    dir: '/mnt/c/Desktop/NodeJSTut',
    base: 'app.js',
    ext: '.js',
    name: 'app'
  }
}
*/
const absolute = path.resolve(__dirname, params) // Transforma em um path absoluto
 // 3. fs - Leito de arquivos

    // Criação de diretório
    // A função de criação é assíncrona, logo não bloqueia a execução do código.

    const fs = require('fs')
    fs.mkdir('./myFolder', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Folder Created')
        }
    })

    // Criando um arquivo async
    // É possível criar um arquivo de forma síncrona  onde o Node espera a criação do arquivo antes de ir para a próxima linha
    // É tbm possível usar uma abordagem assíncrona: Dessa forma o Nodejs não espera a operação de escrita para ir para a próxima linha, ao invés disso chama uma callback quando todo o processo concluir.
    // o método writeFile() é provido para ser usado de forma assíncrona

 // 4. HTTP 