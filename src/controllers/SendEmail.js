const nodemailer = require('nodemailer')

module.exports = {


    async send (req, res){

        const { name, phone, email, description } = req.body

    let now = new Date

    let localDate = '0' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + now.getHours() +
    ':' + now.getMinutes() + ':' + now.getSeconds()

    const transporter = nodemailer.createTransport({ 
        service: 'gmail',
        auth: {
            user: '7sightjr@gmail.com',
            pass: '7Sight@2018'
        }
    });

    const mailOptions = {
        from: '7sightjr@gmail.com',
        to: '7sightjr@gmail.com',
        subject: 'Cliente entrou em contato',
        text: 'Um cliente entrou em contato com a 7Sight' + '\n' + 
        'Nome: ' + name + '\n' +
        'Telefone: ' + phone + '\n' +
        'Email: ' + email + '\n' +
        'Descrição: ' + description,
        date: localDate
    }

    await transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            return console.log(err)
        }
        console.log('Envio feito com sucesso.', info)
    })

    return res.json({ name, phone, email, description });

    },

    async teste(req, res){

        return res.json("teste")

    }
}