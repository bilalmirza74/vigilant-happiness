//Java class called Fraction for working with fractions. This class allows you to create fractions, set their numerator and denominator, print them, simplify them, and perform addition with other fractions.
//Here's an explanation of the key methods and functionalities in your code:
//Constructor: The class has a constructor that initializes a fraction with a given numerator and denominator. It then calls the simplify method to simplify the fraction.
//Print Method: The print method displays the fraction as "numerator / denominator" if the denominator is not 1. If the denominator is 1, it simply displays the numerator.
//Setters and Getters: You have provided methods to set and get the numerator and denominator.
//Simplify Method: The simplify method calculates the greatest common divisor (GCD) of the numerator and denominator and then divides both by the GCD to simplify the fraction.
//Add Method: The add method takes another Fraction object (f2), performs fraction addition, and updates the current fraction to the result. It then calls the print method to display the simplified result.
//This class allows you to work with fractions and perform addition while ensuring the fractions are simplified. However, you may want to consider additional methods for subtraction, multiplication, and division if you need a more comprehensive fraction class.


package StudentUse;

import static java.lang.Math.min;

public class Fraction {
    private int num;
    private int den;
    public Fraction(int num , int den){
        this.den = den;
        this.num = num;
        simplify();
    }

    public void print() {

        if (den == 1){
            System.out.println(num);
        }
        else {
            System.out.println(num + " / " + den);
        }
    }
    public void setNum(int num) {
        this.num = num;
        simplify();
    }
    public void setDen(int den) {

        this.den = den;
        simplify();

    }
    public int getNum() {
        return num;
    }
    public int getDen() {
        return den;
    }

    public void simplify(){
        int gcd =1;
        int smaller = min( num , den);
        for(int i = 2; i <= smaller; i++){
            if( num%i==0 && den%i==0){
                gcd = i;
            }
        }
        num = num/gcd;
        den = den/gcd;

    }

    public void add(Fraction f2) {
        this.num = this.num* f2.den + this.den* f2.num;
        this.den = this.den* f2.den;
        print();
    }
}

//Main Function:

package StudentUse;

public class FractionUse {
    public static void main(String[] args){
        Fraction f1 = new Fraction(2 , 20);
        f1.getNum();
        f1.getDen();
        f1.print();

        f1.setNum(3);
        f1.setDen(9);

        //int d = f1.getDen();
        //System.out.println();
        f1.print();

        //f1.setNum();
        //f1.setDen();
        //f1.print();
        Fraction f2 = new Fraction(30 , 28);
        f2.print();
        f1.add(f2);

    }
}
