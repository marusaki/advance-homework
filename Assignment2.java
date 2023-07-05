package org.pav.helloworld;

public class Assignment2 {
	public int sumLimit(int[] arr) {	
		if (String.valueOf(arr[0] + arr[1]).length() > String.valueOf(arr[0]).length()) {
			return arr[0];
		} else {
			return arr[0] + arr[1];			
		}
	}
	
	//Display result
	public void showSumLimit(int[] arr, int digit) {
		System.out.println("sumLimit(" + arr[0] + ", " + arr[1] + ") -> " + digit);
	}
	
	public static void main(String[] args) {
		Assignment2 myobj = new Assignment2();

		int[] arr1 = {2, 3};
		int[] arr2 = {8, 3};
		int[] arr3 = {8, 1};

		myobj.showSumLimit(arr1, myobj.sumLimit(arr1));
		myobj.showSumLimit(arr2, myobj.sumLimit(arr2));
		myobj.showSumLimit(arr3, myobj.sumLimit(arr3));
		
	}
}
