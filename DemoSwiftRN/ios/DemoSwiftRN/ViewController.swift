//
//  ViewController.swift
//  DemoSwiftRN
//
//  Created by Chris Hu on 17/3/2.
//  Copyright © 2017年 com.icetime17. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    lazy var adView: AdView = {
        let v = AdView(frame: self.view.frame)
        return v
    }()
    
    lazy var rnScrollView: RNScrollView = {
        let v = RNScrollView(frame: self.view.frame)
        return v
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
//        prepareRNView()
        
        view.addSubview(adView)
//        view.addSubview(rnScrollView)
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
