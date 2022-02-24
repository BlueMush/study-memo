 package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BluemushController {
    @GetMapping("/api/bluemush")
    public String bluemush() {
        return "야 이거 가져오냐 ? \n";
    }
}