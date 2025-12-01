package binarysearch.demo.controller;

import java.util.HashMap;
import java.util.Map;

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
    public Map<String, Object> search(@RequestParam int num){
        Node result = treeService.searchFromRoot(num);
        Map<String, Object> map = new HashMap<>();
        if(result != null){
            map.put("found", true);
            map.put("value", result.getNum());
        } else {
            map.put("found", false);
        }
        return map;
    }


    @GetMapping("/test")
    public String test() {
        return "Search works!";
    }

}

