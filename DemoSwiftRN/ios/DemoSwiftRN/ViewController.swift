//
//  ViewController.swift
//  DemoSwiftRN
//
//  Created by zj－db0465 on 17/3/2.
//  Copyright © 2017年 com.icetime17. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    
        prepareRNView()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

extension ViewController {
    func prepareRNView() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
        
        let rootView = RCTRootView(bundleURL: jsCodeLocation,
                                   moduleName: "DemoSwiftRN",
                                   initialProperties: ["scores":[["name":"Alex","value":"42"],["name":"Joel","value":"10"]]],
                                   launchOptions: nil)
        
        view = rootView
    }
}
