const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '673806758:AAF6_lW4ziun2HaX76Ma4W-vIw3r-3QXJQ0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var ikParam = ["소개","기술","포트폴리오","질문하기"];
var pfParam = ["게임공모전","스마트낚싯대","네트워크테트리스","디자인패턴"];

var itdStr = "<b> 이름 : 강동혁 \n 나이 : 28 \n 학력 : 한성대학교 컴퓨터 공학부 졸업 \n 학점 : 3.5 / 4.5 \n 자격증 : 정보처리기사 \n 어학 : TOEIC : 675 \n 이력 : 아르고테크놀리지 인턴 \n (2017.07 - 2018.03) </b>"

var skStr =  "<b> 언어 \n JAVA, JavaScript, Android, C, C++  \n \n 프레임워크 \n SpringFramework, NodeJs, AngularJs \n \n  라이브러리 \n Jquery, BootStrap 등 \n </b>"

var isQuestMessage = false;


//Bot start
bot.onText(/\/start/, (msg) => {
    
    bot.sendMessage(msg.chat.id, "개발자 강동혁입니다.", {
    "reply_markup": {
        "keyboard": [["소개"], ["기술"], ["포트폴리오"], ["질문하기"]]
    }

    });
});

bot.on('message', (msg) => {
    
    if(isQuestMessage === true) {
        console.log(msg.chat);
        var sMsg = (msg.chat.hasOwnProperty('last_name')) ? (msg.chat.first_name.toString()+msg.chat.last_name.toString() + " : " + msg.text.toString()) : (msg.chat.first_name.toString()+ " : " + msg.text.toString())
        bot.sendMessage("743005474",sMsg);
        isQuestMessage = false;
        bot.sendMessage(msg.chat.id,"메세지가 전송되었습니다");
        
        setTimeout(function() {bot.sendMessage(msg.chat.id, "개발자 강동혁입니다.", {
        "reply_markup": {
        "keyboard": [["소개"], ["기술"], ["포트폴리오"], ["질문하기"]]
        }
});
        
    });
    }
    
    //"소개","언어","포트폴리오","질문하기"
    if (msg.text.toString() === ikParam[0]) {
     bot.sendMessage(msg.chat.id,itdStr ,{parse_mode : "HTML"});
     } 
    
    if (msg.text.toString() === ikParam[1]) {
     bot.sendMessage(msg.chat.id,skStr ,{parse_mode : "HTML"});
     } 
    
    if (msg.text.toString() === ikParam[2]) {
        bot.sendMessage(msg.chat.id, "포트폴리오를 선택하세요", {
        "reply_markup": {
            "keyboard": [["게임공모전"], ["스마트낚싯대"], ["네트워크테트리스"], ["디자인패턴"], ["뒤로"]]
        }
    });
    } 
    
    if (msg.text.toString() === ikParam[3]) {
     console.log(msg.from.id);
        //743005474
        //
        bot.sendMessage(msg.chat.id, "질문을 입력하세요.");
        isQuestMessage = true;
     } 
    
    
    //PortFolio
    //"게임공모전","스마트낚싯대","네트워크테트리스","디자인패턴"
    if (msg.text.toString() === pfParam[0]) {
        
     bot.sendPhoto(msg.chat.id,"https://user-images.githubusercontent.com/22215395/49850791-3b2dca80-fe22-11e8-8c3c-a01c6db100f7.jpg" );    
     
     setTimeout(function(){ bot.sendMessage(msg.chat.id,"<a href=\"http://125.186.242.83:7070/KakaoSnackGame/\">플레이하기</a>" ,{parse_mode : "HTML"}) }, 1500);    
     
        
    }
    
    if (msg.text.toString() === pfParam[1]) {
     
     bot.sendPhoto(msg.chat.id,"https://user-images.githubusercontent.com/22215395/49064414-2e27ad80-f25e-11e8-8f55-1127c39ec998.JPG" );     
        
     setTimeout(function() { bot.sendMessage(msg.chat.id,"<a href=\"https://github.com/kkddeerr/SmartFishing_AndroidApp/\">GitRepo</a>" ,{parse_mode : "HTML"})}, 1500);    
     
    }
    
    if (msg.text.toString() === pfParam[2]) {
    
     bot.sendPhoto(msg.chat.id,"https://user-images.githubusercontent.com/22215395/49062702-5e6c4d80-f258-11e8-8875-e5b83d1416d6.PNG" );     
        
     setTimeout(function() { bot.sendMessage(msg.chat.id,"<a href=\"https://github.com/kkddeerr/NetworkTetris_Client/\">GitRepo</a>" ,{parse_mode : "HTML"}) }, 1500);    

    }
    
    if (msg.text.toString() === pfParam[3]) {
        
     bot.sendPhoto(msg.chat.id,"https://user-images.githubusercontent.com/22215395/49062070-26fca180-f256-11e8-80d2-481357843246.jpg" );     
    
     setTimeout(function() { bot.sendMessage(msg.chat.id,"<a href=\"https://github.com/kkddeerr/DesignPattern_Strategy-Observer/\">GitRepo</a>" ,{parse_mode : "HTML"}) }, 1500);    

    }
    if (msg.text.toString() === "뒤로") {
            bot.sendMessage(msg.chat.id, "개발자 강동혁입니다.", {
            "reply_markup": {
                "keyboard": [["소개"], ["기술"], ["포트폴리오"], ["질문하기"]]
            }

    });

    }
});