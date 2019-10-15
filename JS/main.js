
    function writeCode(profix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n>=code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 10);
    }
    let code=`
    /*
    *首先，我需要一张皮卡丘的皮
    */
    .preview{
      background: #FFE600;
    }
    /*
    *然后是一个鼻子
    */
    .nose{
      width:0;
      height:0;
      border:11px solid black ;
      border-color:black transparent transparent transparent;
      border-radius:50%;
      position:absolute;
      left:50%;
      top:27px;
      transform:translateX(-50%);
    }
    /*
    *接着是它的眼睛
    */
    .eye{
      width:49px;
      height:49px;
      background: #2E2E2E ;
      position: absolute;
      border-radius:50%;
      top:0;
      border:2px solid black;
      
    }
    .eye::before{
      content:'';
      display:block;
      width:24px;
      height:24px;
      border-radius:50%;
      border:2px solid black;
      background: #FFFFFF;
      position: absolute;
      left:6px;
    }
    /*
    *左边的眼睛
    */
    .eye.left{
      right:50%;
      margin-right:66px;
    }
    /*
    *右边的眼睛
    */
    .eye.right{
      left:50%;
      margin-left:66px;
    }
    /*
    *红红的脸蛋
    */
    .face{
      width:68px;
      height:68px;
      background: #FF0000;
      border-radius:50%;
      border:3px solid black;
      position:absolute;
      top:85px;
    }
    /*
    *左边的脸蛋
    */
    .face.left{
      margin-right:94px;
      right:50%;
    }
    /*
    *右边的脸蛋
    */
    .face.right{
       margin-left:94px;
      left:50%;
    }
    /*
    *大大的嘴唇
    */
    .mouseLip{
      width:75px;
      height:25px;
      border:3px solid black;
      border-radius:10px;
      position: absolute;
      background: #FFE600;
    }
    /*
    *左边的嘴唇
    */
    .mouseLip.left{
      border-top:none;
      border-right:none;
      border-bottom-left-radius:104px 60px;
      transform:rotate(-25deg);
      right:50%;
      top:53px;
      box-shadow: -18px -14px 4px 0px rgba(255,230,0,1);    
    }
    /*
    *右边的嘴唇
    */
    .mouseLip.right{
       border-top:none;
      border-left:none;
      border-bottom-right-radius:104px 60px;
      transform:rotate(25deg);
      left:50%;
      top:53px;
      box-shadow: 6px -10px 2px 0px  rgba(255,230,0,1);
    }
    
    /*
    *最后是舌头
    */
    .box{
      height:130px;
      width:300px;
      position: absolute;
      left:50%;
      transform:translateX(-50%);
      top:60px;
      overflow:hidden;
    }
    
    .box .oval{
      width:300px;
      height:3000px;
      border-radius:200px/2000px;
      border:4px solid #000000;
      background:#9B000A;
      position: absolute;
      bottom:0;
       overflow:hidden;
    }
    
    .oval >.circle{
      width:100px;
      height:100px;
      background: #FF475F;
      border:1px solid balck;
      border-radius:50%;
      position:absolute;
      bottom:-1px;
      left:50%;
      transform:translateX(-50%);
    }
    /*
    *好了，一只皮卡丘就完成了
    */
    `
    writeCode('', code)
    
    
