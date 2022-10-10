function dif_one(N1,N2){
    N2 = Math.floor(Math.random() * 10);
    while(1){ //첫번째 난수와 두번째 난수가 다른 숫자일 때까지 반복
        if(N1 != N2) break;
        else N2 = Math.floor(Math.random() * 10);
    }
    return N2;
}

function dif_two(N1,N2,N3){
    N3 = Math.floor(Math.random() * 10);
    while(N3 == N1 || N3 == N2){ //첫번째 난수와 두번째 난수가 다른 숫자일 때까지 반복
    N3 = Math.floor(Math.random() * 10);
    }
    return N3;
}

function print(R1,R2,R3,I1,I2,I3,sc,bc){
    document.write("<br><br>랜덤 숫자: "+R1+R2+R3+"<br>");
    document.write("입력한 숫자:"+I1+I2+I3+"<br><br>");

    document.write("Strike!: "+strike_cnt + "<br>");
    document.write("ball: :" + ball_cnt);
}



/* 랜덤값 */
var random_num = [[0],[0],[0]];

random_num[0] = Math.floor(Math.random() * 10);
random_num[1] = dif_one(random_num[0],random_num[1]);
random_num[2] = dif_two(random_num[0],random_num[1],random_num[2]);
//랜덤 값은 생성시 계속 유지

/*결과값: 값을 맞춘 부분은 숫자 표시*/
result = ['-','-','-'];

var strike_cnt = 0, ball_cnt = 0,rep=0,ipt;

/*사용자 입력값 선언: 초기 선언*/
var ipt_arr = [[0],[0],[0]],ipt,rep=0;



function GameStart(){
    while(1){
        ipt = parseInt(prompt("세 자리 수를 입력하세요. "));

        //사용자가 입력한 값 분할
        ipt_arr[0] = parseInt(ipt / 100); //123/100 ==> 1
        ipt_arr[1] = parseInt(ipt/10%10); //123/10 ==> 12 %10 ==>2
        ipt_arr[2] = parseInt(ipt%10);

        strike_cnt = 0; ball_cnt=0;
        for(let i=0;i<3;i++) if(ipt_arr[i]==random_num[i]) strike_cnt ++;
    
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(i!=j) if(ipt_arr[i]==random_num[i]) ball_cnt ++;
            }
        }
    
        print(random_num[0],random_num[1],random_num[2],ipt_arr[0],ipt_arr[1],ipt_arr[2],strike_cnt,ball_cnt);
        rep ++;
        document.write("<br>현재까지 시도한 횟수: "+rep);
        break;
    
    }

}
