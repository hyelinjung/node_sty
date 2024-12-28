//브라우저에서의 자바스크립트
/**
 * HTTP요청을 만들고, 서버와 데이터를 비동기적으로 주고받을 수 있게 해주는 브라우저의 내장 객체.
HTTP요청을 보내고 응답을 받을 수 있는 기능을 제공하고, 반드시 xml 형식의 데이터를 주고받는데 사용되지 않고, JSON,HTML등 다양한 형식으로 데이터를 주고받을 수 있다.
 */
function getUser(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){//서버에서 반환된 데이터를 처리할 수 있다. .onload
        if(xhr.status ===200){
            var users = JSON.parse(xhr.responseText)//서버의 응답 텍스트
            var list = document.getElementById('list');
            list.innerHTML='';
            Object.keys[users].map((key)=>{
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                span.textContent = users[key];
                var edit = document.createElement('button');
                edit.textContent='수정';
                edit.addEventListener('click',()=>{
                    var name =  prompt('바꿀 이름을 입력하세요');
                    if(!name){
                        return alert('이름은 필수!');
                    }//리턴문이 실행되면 getUser()함수가 종료됨
                    var xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        if(xhr.status===200){
                            console.log(xhr.responseText);
                            getUser();
                        }else{
                            console.error(xhr.responseText);
                        }
                    };

                    xhr.open('PUT',`/users/${key}`);
                    xhr.setRequestHeader('Content-Type','application/json');
                    xhr.send(JSON.stringify({name:name}));
                });//리스너

                var remove = document.createElement('button');
                remove.textContent='삭제';
                remove.addEventListener('click',()=>{
                    var xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        if(xhr.status===200){
                            console.log(xhr.responseText);
                            getUser();
                        }else{
                            console.error(xhr.responseText);
                        }
                    };

                    xhr.open('DELETE',`/users/${key}`);
                    xhr.send();
                });//리스너
            
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
            });//Object.keys[users].map((key)
        }else{//if(xhr.status ===200){
            console.error(xhr.responseText);
        }
    };//onload
    xhr.open('GET','/users');
    xhr.send();
}//getUser()

window.onload = getUser;//로딩 시 호출

//폼 제출
document.getElementById('form').addEventListener('submit',(e)=>{
e.preventDefault();
var name = e.target.username.value;
if(!name){
    return alert('이름을 입력하시오');
}
var xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        if(xhr.status===200){
                            console.log(xhr.responseText);
                            getUser();
                        }else{
                            console.error(xhr.responseText);
                        }
                    };

                    xhr.open('POST','/users');
                    xhr.setRequestHeader('Content-Type','application/json');
                    xhr.send(JSON.stringify({name:name}));
                    e.target.username.value='';

});