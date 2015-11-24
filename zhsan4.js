function role(){
    var massege1=[
        "战士","英雄"
    ];
    return massege1;
}
function weapon(){
    var massege2=[
        {weapon:"木棒",
            hurt:1
        },
        {weapon:"大锤",
            hurt:1.5
        },
        {weapon:"长矛",
            hurt:3
        },
        {weapon:"盾牌",
            defense:2
        }
    ];
    return massege2;
}

function game(role1,role2,name1,weapon1,weapon2,a,b,e,name2,c,d,f){
    var r=role();

    var de1;/*防御值*/
    var w1; /*伤害值*/
    var m= weapon();

    for(var i= 0,j=0;role1==r[i]||role2==r[j];i++,j++){
        for(i=0;i<m.length;i++){
            if(weapon1==m[i].weapon){
                w1=m[i].hurt;
            }
            else if(weapon2==m[i].weapon){
                de1=m[i].defense;
                console.log(de1);
            }
        }
    }
    while(d>0||b>0){
        var z,l;
        z=d-a+f-w1;
        d=z;
        var print1=role1+name1+"用"+weapon1+"攻击"+name2+","
            +name2+"受到"+Math.abs(f-a-w1)+"点伤害,"
            +name2+"剩余生命值:"+z;
        console.log(print1);
        if(d<=0){break;}
        l=b-c+e+de1;
        b=l;
        var print2=role2+name2+"攻击"+role1+name1+","
            +name1+"受到"+Math.abs(c-e-de1)+"点伤害,"
            +name1+"剩余生命值:"+l;
        console.log(print2);
        if(b<=0){break;}
    }
}

console.log(game("战士","普通人","张三","长矛","盾牌",2,15,1,"李四",4,11,1));


