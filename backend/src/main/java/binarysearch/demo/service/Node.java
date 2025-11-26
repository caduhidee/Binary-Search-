package binarysearch.demo.service;

public class Node {
    int num;
    Node left, right;

    Node(int num) {
        this.num = num;
    }

    public int getNum(){
        return num;
    }
}
