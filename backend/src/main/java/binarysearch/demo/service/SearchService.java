package binarysearch.demo.service;

import org.springframework.stereotype.Service;


@Service
public class SearchService {
    public static Node binarySearch(Node root, int target) {
        if (root == null) {
            return null;
        }

        if (target == root.num) {
            return root; 
        }

        if (target < root.num) {
            return binarySearch(root.left, target);
        } else {
            return binarySearch(root.right, target);
        }
    }
}
