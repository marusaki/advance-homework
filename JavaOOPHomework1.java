package org.pav.helloworld;

abstract class AbstractA {
    public int a;
    
    AbstractA() {
        a = 10;
    }
 
    //abstract public void set(); //set()　→ set(int a)     
    abstract public void set(int a);     
    //abstract final public void get(); //delete "final"
    abstract public void get();
}

class JavaOOPHomework1 extends AbstractA {
    public void set(int a){
        this.a = a;
    }
 
    final public void get(){
        System.out.println("a = " + a);
    }
 
    public static void main(String[] args){
    	JavaOOPHomework1 obj = new JavaOOPHomework1();
        obj.set(20);
        obj.get();
    }
}