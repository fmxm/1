function role(){
    var massege1=[
        "սʿ","Ӣ��"
    ];
    return massege1;
}
function weapon(){
    var massege2=[
        {weapon:"ľ��",
            hurt:1
        },
        {weapon:"��",
            hurt:1.5
        },
        {weapon:"��ì",
            hurt:3
        },
        {weapon:"����",
            defense:2
        }
    ];
    return massege2;
}

function game(role1,role2,name1,weapon1,weapon2,a,b,e,name2,c,d,f){
    var r=role();

    var de1;/*����ֵ*/
    var w1; /*�˺�ֵ*/
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
        var print1=role1+name1+"��"+weapon1+"����"+name2+","
            +name2+"�ܵ�"+Math.abs(f-a-w1)+"���˺�,"
            +name2+"ʣ������ֵ:"+z;
        console.log(print1);
        if(d<=0){break;}
        l=b-c+e+de1;
        b=l;
        var print2=role2+name2+"����"+role1+name1+","
            +name1+"�ܵ�"+Math.abs(c-e-de1)+"���˺�,"
            +name1+"ʣ������ֵ:"+l;
        console.log(print2);
        if(b<=0){break;}
    }
}

console.log(game("սʿ","��ͨ��","����","��ì","����",2,15,1,"����",4,11,1));


