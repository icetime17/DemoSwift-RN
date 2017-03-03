//
//  RNScrollView.swift
//  DemoSwiftRN
//
//  Created by Chris Hu on 17/3/2.
//  Copyright © 2017年 com.icetime17. All rights reserved.
//

import UIKit
import React

class RNScrollView: UIView {

    override init(frame: CGRect) {
        super.init(frame: frame)
        
        prepareRNView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func prepareRNView() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
        
        if let rootView = RCTRootView(bundleURL: jsCodeLocation,
                                      moduleName: "DemoSwiftRN",
                                      initialProperties: ["scores":[["name":"Alex","value":"42"],["name":"Joel","value":"10"]]],
                                      launchOptions: nil) {
            rootView.frame = self.frame
            self.addSubview(rootView)
        }
    }

}
