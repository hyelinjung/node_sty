//파일을 열고 닫으면서 부분적으로 수정하기
var fs = require('fs');

fs.open('./read.txt','w',function(err,data){ //두번째 인자(파일을 읽고,쓰기를 위한 플래그,밑 해석)
    if(err) throw err;

    var buf = Buffer('안녕!\n');
    fs.write(data,buf,0,buf.length,null,function(err,written,buffer){
        if(err) throw err;
        console.log(err,written,buffer);

        fs.close(data,function(){
            console.log('해당 파일 이제 닫음');
        });
    });
});

//만들어진 파일을 읽어 들이는 코드
fs.open 




/**플래그
 * r 읽기에 사용하는 플래그. 파일이 없으면 오류발생
 * w 쓰기에 사용, 파일이 없으면 만들어지고 있으면 이전 내용을 모두 삭제
 * w+ 읽기 쓰기 모두 사용 w와 내용 같음
 * a+ 읽기와 추가에 사용, 없으면 파일 생성 있으면 이전 내용에 새로운 내용 추가
 */