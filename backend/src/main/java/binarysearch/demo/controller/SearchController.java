package binarysearch.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import binarysearch.demo.service.Node;
import binarysearch.demo.service.SearchService;


@RestController
public class SearchController {
    
    private final SearchService service;

    public SearchController(SearchService service){
        this.service = service;
    }

    @GetMapping("/api/search")
    public int search(Node node, @RequestParam int value){
        Node result = (Node) SearchService.binarySearch(node, value);
        return result.getNum();
    }
}

