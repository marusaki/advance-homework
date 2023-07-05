package org.pav.helloworld;

public class Assignment3 {

	public int sumDigits(String str) {
		int sum = 0;
		
		//Check whether each character is a number and add it to "sum"
		for (int i = 0; i < str.length(); i++ ) {
			if (Character.isDigit(str.charAt(i)) == true) {
				sum = sum + Integer.parseInt(String.valueOf(str.charAt(i)));
			}
		}
		return sum;
	}
	
	//Display result
	public void showSumDigits(String str, int sum){
		System.out.println("sumDigits(\"" + str + "\") -> " + sum);
	}

	public static void main(String[] args) {
		Assignment3 myobj = new Assignment3();
		
		String mystr1 = "aa1bc2d3";
		String mystr2 = "aa11b33";
		String mystr3 = "Chocolate";
		
		myobj.showSumDigits(mystr1, myobj.sumDigits(mystr1));
		myobj.showSumDigits(mystr2, myobj.sumDigits(mystr2));
		myobj.showSumDigits(mystr3, myobj.sumDigits(mystr3));
		
	}
}
