#include<stdio.h>

void print(char *m,int a,int b,char *n,int c,int d);
void main(){

	int a,b,c,d;
	char m[20];
	char n[20];
	printf("please put massage\n"); 
	scanf("%s %d %d \n %s %d %d",&m,&a,&b,&n,&c,&d);   
    print(m,a,b,n,c,d);   
            
}
	             
void print(char *m,int a,int b,char *n,int c,int d){    
	int z,l;
	int i=1;
    while(d>0&&b>0)
    {
	z=d-a;
	d=z;
	printf("%s攻击%s,%s受到%d点伤害,%s剩余生命值:%d\n",m,n,n,a,n,z);
	l=b-c;
	b=l;
	printf("%s攻击%s,%s受到%d点伤害,%s剩余生命值:%d\n",n,m,m,c,m,l);
   	i++;
	};
	
}	          
	             
