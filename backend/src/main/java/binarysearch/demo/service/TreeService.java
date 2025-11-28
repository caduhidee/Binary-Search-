package binarysearch.demo.service;

import org.springframework.stereotype.Service;

@Service
public class TreeService {
    private Node root;

    public void saveTree (Node root){
        this.root = root;
    }

    public Node getTree(){
        return root;
    }

    public Node search(Node root, int target) {
        if (root == null) {
            return null;
        }

        if (target == root.num) {
            return root; 
        }

        if (target < root.num) {
            return search(root.left, target);
        } else {
            return search(root.right, target);
        }
    }

    public Node serachFromRoot(int value) {
        return search(root, value);
    }
}