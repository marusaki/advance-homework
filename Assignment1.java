package org.pav.helloworld;
import java.util.Arrays;
 
public class Assignment1 {	
	//new array
	public int[] makeLast(int[] nums) {
		//Define an array and initialize it with 0
		int[] newnums = new int[nums.length * 2];
		
		//Swap last element
		newnums[newnums.length - 1] = nums[nums.length - 1];

		return newnums;
	}
	
	//Display result
	public void showMakeLast(int[] num1, int[] num2){
		System.out.println("makeLast(" + Arrays.toString(num1) + " -> " + Arrays.toString(num2) + ")");
	}
	
	public static void main(String[] args) {
		Assignment1 myobj = new Assignment1();
		
		int[] array1 = {4, 5, 6};
		int[] array2 = {1, 2};
		int[] array3 = {3};
		
		myobj.showMakeLast(array1, myobj.makeLast(array1));		
		myobj.showMakeLast(array2, myobj.makeLast(array2));
		myobj.showMakeLast(array3, myobj.makeLast(array3));
	}
}