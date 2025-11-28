package binarysearch.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import binarysearch.demo.service.Node;
import binarysearch.demo.service.TreeService;




@RestController
@RequestMapping("/api/tree")
public class TreeBuilderController {

    private final TreeService treeService;

    public TreeBuilderController(TreeService treeService) {
        this.treeService = treeService;
    }

    @PostMapping
    public String saveTree(@RequestBody Node root) {
        treeService.saveTree(root);
        return "tree saved";
    }

    @GetMapping
    public binarysearch.demo.service.Node getTree(){
        return treeService.getTree();
    }

}
