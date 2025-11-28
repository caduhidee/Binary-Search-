package binarysearch.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import binarysearch.demo.service.Node;
import binarysearch.demo.service.TreeService;


@RestController
@RequestMapping("/api/search")
public class SearchController {
    
    private final TreeService treeService;

    public SearchController(TreeService treeService){
        this.treeService = treeService;
    }

    @GetMapping
    public String search(@RequestParam int num){
        Node result = (Node) treeService.serachFromRoot(num);
        if(result != null){
            return "Value Found: " + result.getNum();
        }
        else {
            return "Value was not found :(";
        }
        
    }

    @GetMapping("/test")
    public String test() {
        return "Search works!";
    }

}

