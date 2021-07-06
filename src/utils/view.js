module.exports = {
    email(name, email, code) {
        return `
        <!DOCTYPE html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@300&display=swap"
            rel="stylesheet">
        <style>
            .title {
                
                color: rgb(194, 48, 194)
            }
    
            .code {
            
                font-weight: bold;
                letter-spacing: 3px;
            }
            .content p {
                color : rgb(60,50,60);
            }
    
            .content {
                border: 1px rgba(0,0,0,.1) solid;
                max-width: 350px;
                padding-top: 10vh;
                padding-bottom: 10vh;
                padding-left: 3vh;
                background: rgb(231, 231, 231);
                margin: 0 auto;
                border-radius: 5px;
    
            }
            .container {
                background-color: silver;
                background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
                font-family: 'Roboto', sans-serif;
                width: 100%;
                height: 100vh;
                padding-top: 30vh;
            }
            .logo {
                width: 50px; 
            }
    
        </style>
    </head>
    
    <body>
      <div class="container"> 
        <div class="content">
            <h1 class="logo">Ponte</h1>
            <h2 class="title"> Recuperação de Senha </h2>
            <p>Olá, ${name}</p>
            <p> Utilize o código abaixo para recuperar a senha </p>
            <h3 class="code">${code}</h3>
        </div>
     </div>
    </body>
    
    </html>`
    }  
}