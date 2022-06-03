import React from "react";
import Card from "./Card";

export default function Home() {
    return (

            <div>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="SetUp"/>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="All Product"/>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="All Catalogue"/>
                </div>
              </div>
            </div>

    );
  }