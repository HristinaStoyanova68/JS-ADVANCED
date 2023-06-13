function requestValidator(obj) {

    //const copyObj = { ...obj };
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const regexURI = /^[a-zA-Z.0-9]+$/gm;
    const regexMessage = /[<>&'"\\]/gm;

    if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!obj.hasOwnProperty('uri') || !regexURI.test(obj.uri) || obj.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!obj.hasOwnProperty('message') || regexMessage.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj;
}

const x = requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
console.log(x);
//   requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   );
//   console.log('............');
//   requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }
//   );
