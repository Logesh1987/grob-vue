<template>
  <div class="grOnboarding">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div class="congratsPage" :class="{'paused': !live}">
      <header>
        <div class="contentArea">
          <a href="#" class="logo">
            <img src="@/images/logo_gr.png" alt="Gratisfaction" />
          </a>
        </div>
      </header>
      <section>
        <div class="contentArea">
          <div class="row">
            <div class="col-md-3">
              <div class="controlBox">
                <div class="d-flex justify-content-sm-between">
                  <h6>
                    Your Loyalty
                    <br />Program is
                    <strong>LIVE</strong>
                    {{live}}
                  </h6>
                  <label class="switch" for="programSwitch">
                    <input type="checkbox" v-model="live" id="programSwitch" />
                    <i></i>
                  </label>
                </div>
                <a
                  href="https://maverickmav.org/css4/"
                  target="_blank"
                  class="btn btn-outline-dark"
                >
                  Preview in your website
                  <i class="material-icons">chevron_right</i>
                </a>
                <hr class="mt-4 mb-4" />
                <h6>SUMMARY</h6>
                <ul class="summaryPoints">
                  <li>
                    <p>
                      Guest checklist shoud be optional - So customers shoud have the option to
                      create
                      an account
                    </p>
                  </li>
                  <li>
                    <p>You can enroll past customers</p>
                  </li>
                  <li>
                    <p>
                      You are giving 100 welcome points, puchase points = 1 point for every
                      currency
                      spent
                    </p>
                  </li>
                </ul>
                <a href="#" class="btn gotoDashboard">
                  Go to Dashboard
                  <i class="material-icons">chevron_right</i>
                </a>
              </div>
              <div class="otherContents">
                <ul>
                  <li>
                    <a href="#">
                      Tips to promote your program
                      <sup class="text-danger">*</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-9">
              <div class="statusRep">
                <div class="head">
                  <div class="live">
                    <h2>Congratulations</h2>
                    <p>
                      Your loyalty program is
                      <strong>Live</strong>.
                    </p>
                  </div>
                  <div class="paused">
                    <h2>Attention</h2>
                    <p>
                      Your loyalty program is
                      <strong>Paused</strong>.
                    </p>
                  </div>
                </div>
                <div class="statusInfo" style="display: none;">
                  <i class="material-icons">info</i>
                  <div>
                    <i class="icon-settings"></i>
                    <span>You can pause and edit any of these features at any time later</span>
                  </div>
                  <div>
                    <i class="icon-list"></i>
                    <span>Checkout all the available features</span>
                  </div>
                </div>
              </div>

              <div class="setupContainer" id="setupAccordion">
                <b-card no-body>
                  <b-card-header
                    v-b-toggle.accordion-1
                    class="justify-content-start align-items-center"
                    role="tab"
                  >
                    <h2>1. Setup</h2>
                    <div class="alert alert-warning d-inline-flex align-items-center mb-0 ml-2">
                      <i class="text-primary material-icons mr-2">info</i>
                      You can edit, pause any setup anytime
                    </div>
                    <!-- <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button> -->
                  </b-card-header>
                  <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <SetupList />
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <div class="card">
                  <div
                    class="card-header justify-content-start align-items-center collapsed"
                    data-toggle="collapse"
                    data-target="#setup"
                    aria-expanded="true"
                    aria-controls="setup"
                  >
                    <h2>1. Setup</h2>
                    <div class="alert alert-warning d-inline-flex align-items-center mb-0 ml-2">
                      <i class="text-primary material-icons mr-2">info</i>
                      You can edit, pause any setup anytime
                    </div>
                  </div>
                  <div
                    id="setup"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#setupAccordion"
                  >
                    <div class="card-body pr-0 pl-0">
                      <div class="setupItemContainer">
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Points Program</h3>
                            <p>Purchase rewards for customers</p>
                            <label class="switch" for="pointsProgram">
                              <input type="checkbox" checked id="pointsProgram" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>Fixed Points</li>
                              <li>Get 1 point for 1 euro purchase</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Signup Bonus</h3>
                            <p>Signup bonus for new users</p>
                            <label class="switch" for="signupbonus">
                              <input type="checkbox" checked id="signupbonus" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>100 Welcome points for new signed up users</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Pay by Points</h3>
                            <p>Setup pay by points</p>
                            <label class="switch" for="paybypoints">
                              <input type="checkbox" checked id="paybypoints" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>1 Reward Point is equal to 1€</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Referral Setup</h3>
                            <p>Referral rewards for referrer</p>
                            <label class="switch" for="refferalsetup">
                              <input type="checkbox" checked id="refferalsetup" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>1 referral to have 200 reward point</li>
                              <li>Fixed coupon with 20% off, no minimum value</li>
                              <li>2 Referral limit per user</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Share on Facebook</h3>
                            <p>When members share your message</p>
                            <label class="switch" for="fbshare">
                              <input type="checkbox" checked id="fbshare" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>100 Reward points</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Share on Twitter</h3>
                            <p>When members share your message</p>
                            <label class="switch" for="twshare">
                              <input type="checkbox" checked id="twshare" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>100 Reward points</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Birthday Rewards</h3>
                            <p>
                              Lorem ipsum dollar iset acuulettt Lorem ipsum dollar iset
                              acuulettt Lorem ipsum dollar
                            </p>
                            <label class="switch" for="bday">
                              <input type="checkbox" checked id="bday" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>100 Reward point on birthday</li>
                              <li>50 Reward point for entering birthday</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                      </div>
                      <br />
                      <h6 class="mt-3 mb-3 pausedRewardHead">Paused Rewards (During Setup)</h6>
                      <br />
                      <div class="setupItemContainer">
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>WOO Review Rewards</h3>
                            <p>Reward reviews of products, service..</p>
                            <label class="switch" for="woorewards">
                              <input type="checkbox" id="woorewards" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>10 Reward point for approved review</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                        <div class="setupItemList">
                          <div class="stepHead">
                            <h3>Subscribe to Newsletter if we have</h3>
                            <p>Incentivize users for signing up to</p>
                            <label class="switch" for="newsletter">
                              <input type="checkbox" id="newsletter" />
                              <i></i>
                            </label>
                          </div>
                          <div class="setupListBody">
                            <ul class="mt-4 mb-4">
                              <li>10 Reward point for subscription</li>
                            </ul>
                            <button class="btn btn-outline-dark pr-4 pl-4 mt-4">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card rewardsBlock">
                  <div
                    class="card-header collapsed"
                    data-toggle="collapse"
                    data-target="#rewards"
                    aria-expanded="true"
                    aria-controls="rewards"
                  >
                    <h2>2. Rewards</h2>
                    <div class="additionalElements">
                      <a href="#" class="btn btn-success addReward">Add Reward</a>
                    </div>
                  </div>

                  <div
                    id="rewards"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#setupAccordion"
                  >
                    <div class="card-body">
                      <div class="rewardList">
                        <div class="rewardItem">
                          <div class="rewardDragger">
                            <i class="material-icons">reorder</i>
                          </div>
                          <div class="rewardThumb">
                            <figure style="background-image: url(https://picsum.photos/300/200)"></figure>
                          </div>
                          <div class="rewardInfo">
                            <h5>
                              <strong>$5 off coupon</strong>
                            </h5>
                            <p>Redeem $5 off coupon for 500 points</p>
                            <hr />
                            <div class="details">
                              <span>Qty</span>
                              <strong>Unlimited</strong>
                              <span>Required Points</span>
                              <strong>500 Pts</strong>
                            </div>
                          </div>
                          <div class="rewardControls">
                            <a href="#">
                              <i class="icon-undefined"></i>
                            </a>
                            <label class="switch" for="r1">
                              <input type="checkbox" checked id="r1" />
                              <i></i>
                            </label>
                            <a href="#">
                              <i class="material-icons">delete_outline</i>
                            </a>
                          </div>
                        </div>
                        <div class="rewardItem">
                          <div class="rewardDragger">
                            <i class="material-icons">reorder</i>
                          </div>
                          <div class="rewardThumb">
                            <figure style="background-image: url(https://picsum.photos/305/200)"></figure>
                          </div>
                          <div class="rewardInfo">
                            <h5>
                              <strong>$25 off coupon</strong>
                            </h5>
                            <p>Redeem $25 off coupon for 1500 points</p>
                            <hr />
                            <div class="details">
                              <span>Qty</span>
                              <strong>Unlimited</strong>
                              <span>Required Points</span>
                              <strong>500 Pts</strong>
                            </div>
                          </div>
                          <div class="rewardControls">
                            <a href="#">
                              <i class="icon-undefined"></i>
                            </a>
                            <label class="switch" for="r1">
                              <input type="checkbox" checked id="r1" />
                              <i></i>
                            </label>
                            <a href="#">
                              <i class="material-icons">delete_outline</i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <br />
                      <h6 class="mt-3 mb-3 pausedRewardHead">Paused Rewards (During Setup)</h6>
                      <br />
                      <div class="rewardList">
                        <div class="rewardItem">
                          <div class="rewardDragger">
                            <i class="material-icons">reorder</i>
                          </div>
                          <div class="rewardThumb">
                            <figure style="background-image: url(https://picsum.photos/305/200)"></figure>
                          </div>
                          <div class="rewardInfo">
                            <h5>
                              <strong>$25 off coupon</strong>
                            </h5>
                            <p>Redeem $25 off coupon for 1500 points</p>
                            <hr />
                            <div class="details">
                              <span>Qty</span>
                              <strong>Unlimited</strong>
                              <span>Required Points</span>
                              <strong>500 Pts</strong>
                            </div>
                          </div>
                          <div class="rewardControls">
                            <a href="#">
                              <i class="icon-undefined"></i>
                            </a>
                            <label class="switch" for="r4">
                              <input type="checkbox" id="r4" />
                              <i></i>
                            </label>
                            <a href="#">
                              <i class="material-icons">delete_outline</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card themesBlock">
                  <div
                    class="card-header collapsed"
                    data-toggle="collapse"
                    data-target="#themes"
                    aria-expanded="true"
                    aria-controls="themes"
                  >
                    <h2>3. Themes</h2>
                  </div>
                  <div
                    id="themes"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#setupAccordion"
                  >
                    <div class="card-body">
                      <nav class="themeSetupTab">
                        <div class="nav nav-tabs" id="theme-setup" role="tablist">
                          <a
                            class="nav-item nav-link active"
                            data-toggle="tab"
                            href="#popup-tab"
                            role="tab"
                            aria-controls="popup-tab"
                            aria-selected="true"
                          >
                            Popup
                            Setup
                          </a>
                          <a
                            class="nav-item nav-link"
                            data-toggle="tab"
                            href="#widget-tab"
                            role="tab"
                            aria-controls="widget-tab"
                            aria-selected="false"
                          >
                            Widget
                            Setup
                          </a>
                        </div>
                      </nav>
                      <div class="tab-content" id="theme-setupContent">
                        <div
                          class="tab-pane fade show active popupSetup"
                          id="popup-tab"
                          role="tabpanel"
                          aria-labelledby="popup-tab"
                        >
                          <div class="row justify-content-between">
                            <div class="col-md-7">
                              <img src="images/popup_preview_mobile.jpg" class="previewImg" />
                              <img src="images/popup_preview_desktop.jpg" class="previewImg" />
                            </div>
                            <div class="col-md-5">
                              <nav>
                                <div class="nav nav-pills mb-4" id="popup-tab" role="tablist">
                                  <a
                                    class="nav-item nav-link active"
                                    id="nav-mobile-tab"
                                    data-toggle="tab"
                                    href="#nav-mobile"
                                    role="tab"
                                    aria-controls="nav-mobile"
                                    aria-selected="true"
                                  >Mobile</a>
                                  <a
                                    class="nav-item nav-link"
                                    id="nav-desktop-tab"
                                    data-toggle="tab"
                                    href="#nav-desktop"
                                    role="tab"
                                    aria-controls="nav-desktop"
                                    aria-selected="false"
                                  >Desktop</a>
                                </div>
                              </nav>
                              <div class="tab-content" id="popup-tabContent">
                                <div
                                  class="tab-pane fade show active"
                                  id="nav-mobile"
                                  role="tabpanel"
                                  aria-labelledby="nav-mobile-tab"
                                >
                                  <h6 class="mb-4">
                                    <strong>Popup styles</strong>
                                  </h6>
                                  <div class="form-group">
                                    <label>Font Family</label>
                                    <select class="form-control" id="family">
                                      <option>Monserrat</option>
                                      <option>Arial</option>
                                      <option>Helvetica</option>
                                      <option>Serif</option>
                                      <option>Impact</option>
                                    </select>
                                  </div>
                                  <div
                                    id="color-picker-component"
                                    class="form-group d-flex flex-row align-items-center colorpicker-component"
                                  >
                                    <label for="family" class="col-md-5 p-0 m-0">
                                      Text
                                      Colors
                                    </label>
                                    <div class="cPicker col-md-7 p-0">
                                      <input type="text" value="#38a677" class="form-control" />
                                      <span class="input-group-addon">
                                        <i></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    id="color-picker-component"
                                    class="form-group d-flex flex-row align-items-center colorpicker-component"
                                  >
                                    <label for="family" class="col-md-5 p-0 m-0">
                                      BG
                                      Colors
                                    </label>
                                    <div class="cPicker col-md-7 p-0">
                                      <input type="text" value="#38a677" class="form-control" />
                                      <span class="input-group-addon">
                                        <i></i>
                                      </span>
                                    </div>
                                  </div>
                                  <button type="submit" class="btn btn-success mt-3">
                                    Save
                                    and Next
                                  </button>
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="nav-desktop"
                                  role="tabpanel"
                                  aria-labelledby="nav-desktop-tab"
                                >
                                  <h6>
                                    <strong>Desktop Popup styles</strong>
                                  </h6>
                                  <div class="form-group">
                                    <label>Font Family</label>
                                    <select class="form-control" id="family">
                                      <option>Monserrat</option>
                                      <option>Arial</option>
                                      <option>Helvetica</option>
                                      <option>Serif</option>
                                      <option>Impact</option>
                                    </select>
                                  </div>
                                  <div
                                    id="color-picker-component"
                                    class="form-group d-flex flex-row align-items-center colorpicker-component"
                                  >
                                    <label for="family" class="col-md-5 p-0 m-0">
                                      Text
                                      Colors
                                    </label>
                                    <div class="cPicker col-md-7 p-0">
                                      <input type="text" value="#38a677" class="form-control" />
                                      <span class="input-group-addon">
                                        <i></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    id="color-picker-component"
                                    class="form-group d-flex flex-row align-items-center colorpicker-component"
                                  >
                                    <label for="family" class="col-md-5 p-0 m-0">
                                      BG
                                      Colors
                                    </label>
                                    <div class="cPicker col-md-7 p-0">
                                      <input type="text" value="#38a677" class="form-control" />
                                      <span class="input-group-addon">
                                        <i></i>
                                      </span>
                                    </div>
                                  </div>
                                  <button type="submit" class="btn btn-success mt-3">
                                    Save
                                    and Next
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade widgetSetup"
                          id="widget-tab"
                          role="tabpanel"
                          aria-labelledby="widget-tab"
                        >
                          <div class="row justify-content-between">
                            <div class="col-md-7">
                              <img src="images/widget_preview_mobile.jpg" class="previewImg" />
                              <img src="images/widget_preview_desktop.jpg" class="previewImg" />
                            </div>
                            <div class="col-md-5">
                              <ul
                                class="nav nav-tabs widget-tabs-nav"
                                id="widgetPlacement"
                                role="tablist"
                              >
                                <li class="nav-item">
                                  <a
                                    class="nav-link active"
                                    id="widget-placement-mobile-tab"
                                    data-toggle="tab"
                                    href="#widget-placement-mobile"
                                    role="tab"
                                    aria-controls="widget-placement-mobile"
                                    aria-selected="true"
                                    v-on:click="themes.active_widget = 'mobile'"
                                  >Mobile</a>
                                </li>
                                <li class="nav-item">
                                  <a
                                    class="nav-link"
                                    id="widget-placement-desktop-tab"
                                    data-toggle="tab"
                                    href="#widget-placement-desktop"
                                    role="tab"
                                    aria-controls="widget-placement-desktop"
                                    aria-selected="false"
                                    v-on:click="themes.active_widget = 'desktop'"
                                  >Desktop</a>
                                </li>
                              </ul>
                              <div
                                class="tab-content widget-tabs-panes"
                                id="widgetPlacementContent"
                              >
                                <div
                                  class="tab-pane fade show active"
                                  id="widget-placement-mobile"
                                  role="tabpanel"
                                  aria-labelledby="widget-placement-mobile-tab"
                                >
                                  <div class="form-group">
                                    <label>Widget Placement</label>
                                    <select class="form-control">
                                      <option>Mid Right</option>
                                      <option>Mid Left</option>
                                      <option>Top Right</option>
                                      <option>Top Left</option>
                                      <option>Bottom Right</option>
                                      <option>Bottom Left</option>
                                    </select>
                                  </div>
                                  <div class="form-group mt-4">
                                    <label>Widget Look</label>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        id="wm-look-1"
                                        name="wm-look"
                                        class="custom-control-input"
                                      />
                                      <label class="custom-control-label" for="wm-look-1">Compact</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        id="wm-look-2"
                                        name="wm-look"
                                        class="custom-control-input"
                                      />
                                      <label class="custom-control-label" for="wm-look-2">Full</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        id="wm-look-3"
                                        name="wm-look"
                                        class="custom-control-input"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="wm-look-3"
                                      >Hide Widget</label>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="widget-placement-desktop"
                                  role="tabpanel"
                                  aria-labelledby="widget-placement-desktop-tab"
                                >
                                  <div class="form-group">
                                    <label>Widget Placement Desktop</label>
                                    <select class="form-control">
                                      <option>Mid Right</option>
                                      <option>Mid Left</option>
                                      <option>Top Right</option>
                                      <option>Top Left</option>
                                      <option>Bottom Right</option>
                                      <option>Bottom Left</option>
                                    </select>
                                  </div>
                                  <div class="form-group mt-4">
                                    <label>Widget Look Desktop</label>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        id="wd-look-1"
                                        name="wd-look"
                                        class="custom-control-input"
                                      />
                                      <label class="custom-control-label" for="wd-look-1">Compact</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        id="wd-look-2"
                                        name="wd-look"
                                        class="custom-control-input"
                                      />
                                      <label class="custom-control-label" for="wd-look-2">Full</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        id="wd-look-3"
                                        name="wd-look"
                                        class="custom-control-input"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="wd-look-3"
                                      >Hide Widget</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a
                                class="btn btn-default btnAdvancedSettings collapsed"
                                data-toggle="collapse"
                                href="#advanceSettings"
                                role="button"
                                aria-expanded="false"
                                aria-controls="widgetAdvanced"
                              >Advanced Settings</a>
                              <div class="collapse multi-collapse" id="advanceSettings">
                                <ul
                                  class="nav nav-tabs widget-tabs-nav"
                                  id="widgetAdvanced"
                                  role="tablist"
                                >
                                  <li class="nav-item">
                                    <a
                                      class="nav-link active"
                                      id="widget-text-tab"
                                      data-toggle="tab"
                                      href="#widget-text"
                                      role="tab"
                                      aria-controls="widget-text"
                                      aria-selected="true"
                                    >Text</a>
                                  </li>
                                  <li class="nav-item">
                                    <a
                                      class="nav-link"
                                      id="widget-icons-tab"
                                      data-toggle="tab"
                                      href="#widget-icons"
                                      role="tab"
                                      aria-controls="widget-icons"
                                      aria-selected="false"
                                    >Icon & BG</a>
                                  </li>
                                  <li class="nav-item">
                                    <a
                                      class="nav-link"
                                      id="widget-shape-tab"
                                      data-toggle="tab"
                                      href="#widget-shape"
                                      role="tab"
                                      aria-controls="widget-shape"
                                      aria-selected="false"
                                    >Shape</a>
                                  </li>
                                </ul>
                                <div
                                  class="tab-content widget-tabs-panes"
                                  id="widgetAdvancedContent"
                                >
                                  <div
                                    class="tab-pane fade show active"
                                    id="widget-text"
                                    role="tabpanel"
                                    aria-labelledby="widget-text-tab"
                                  >
                                    <div class="form-group">
                                      <label>Widget Title</label>
                                      <input type="text" value="Rewards" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                      <label>Widget Subtext</label>
                                      <textarea name class="form-control" cols="30" rows="3">Mid Right</textarea>
                                    </div>
                                    <hr class="mb-5 mt-5" />
                                    <h6 class="mb-4">
                                      <strong>Text Styles</strong>
                                    </h6>
                                    <div class="form-group">
                                      <label>Font Family</label>
                                      <select class="form-control" id="family">
                                        <option>Monserrat</option>
                                        <option>Arial</option>
                                        <option>Helvetica</option>
                                        <option>Serif</option>
                                        <option>Impact</option>
                                      </select>
                                    </div>
                                    <div
                                      id="color-picker-component"
                                      class="form-group d-flex flex-row align-items-center colorpicker-component"
                                    >
                                      <label for="family" class="col-md-5 p-0 m-0">
                                        Text
                                        Colors
                                      </label>
                                      <div class="cPicker col-md-7 p-0">
                                        <input type="text" value="#38a677" class="form-control" />
                                        <span class="input-group-addon">
                                          <i></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="widget-icons"
                                    role="tabpanel"
                                    aria-labelledby="widget-icons-tab"
                                  >
                                    <div
                                      id="color-picker-component"
                                      class="form-group d-flex flex-row align-items-center colorpicker-component"
                                    >
                                      <label for="family" class="col-md-5 p-0 m-0">
                                        Icon BG
                                        Color
                                      </label>
                                      <div class="cPicker col-md-7 p-0">
                                        <input type="text" value="#ffffff" class="form-control" />
                                        <span class="input-group-addon">
                                          <i></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="color-picker-component"
                                      class="form-group d-flex flex-row align-items-center colorpicker-component"
                                    >
                                      <label for="family" class="col-md-5 p-0 m-0">
                                        BG
                                        Color
                                      </label>
                                      <div class="cPicker col-md-7 p-0">
                                        <input type="text" value="#389F48" class="form-control" />
                                        <span class="input-group-addon">
                                          <i></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="widget-shape"
                                    role="tabpanel"
                                    aria-labelledby="widget-shape-tab"
                                  >
                                    <div class="form-group">
                                      <label class="mb-4">
                                        Widget corner
                                        roundness
                                      </label>
                                      <input type="range" data-rangeslider />
                                    </div>
                                    <div class="form-group">
                                      <label class="mb-4 mt-5">Widget size</label>
                                      <input type="range" data-rangeslider />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="setupList">
                            <ul>
                                <li>
                                    <a href="./setup.html" class="gotoLink"></a>
                                    <h5 class="m-0">1. Setup</h5>
                                    <div>
                                        <i class="material-icons text-success mr-4">done</i>
                                        <i class="icon-undefined mr-4"></i>
                                    </div>
                                </li>
                                <li>
                                    <a href="./setup.html" class="gotoLink"></a>
                                    <h5 class="m-0">2. Rewards</h5>
                                    <div>
                                        <i class="material-icons text-success mr-4">done</i>
                                        <i class="icon-undefined mr-4"></i>
                                    </div>
                                </li>
                                <li>
                                    <a href="./setup.html" class="gotoLink"></a>
                                    <h5 class="m-0">3. Themes</h5>
                                    <div>
                                        <i class="material-icons text-success mr-4">done</i>
                                        <i class="icon-undefined mr-4"></i>
                                    </div>
                                </li>
                            </ul>
              </div>-->
            </div>
          </div>
        </div>
      </section>
      <div class="rateExperience">
        <div class="contentArea">
          <div class="rateContainer d-flex align-items-center justify-content-between">
            <p
              class="m-0"
              data-reply="Thank you for your feedback!"
            >How was your onboarding experience?</p>
            <div class="rating feedbackRating">
              <Fragment v-for="n in 5" :key="'r'+n">
                <input
                  type="radio"
                  :id="'rStar'+(6-n)"
                  name="rate"
                  :value="6-n"
                  :checked="(6-n) == feedback.rating"
                />
                <label
                  :for="'rStar'+(6-n)"
                  @click="handleRating(6-n)"
                  title="text"
                >{{6-n}} stars {{feedback.rating}}</label>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="feedbackModal"
      ref="feedbackModal"
      hide-footer
      hide-header
      centered
      modal-class="feedbackModal"
    >
      <template v-slot:default="{ hide }">
        <a href class="bvClose" @click.prevent="hide()">&times;</a>

        <h5 class="mt-4">
          <strong>Help us improve</strong>
        </h5>
        <div class="d-flex align-items-center justify-content-center p-3">
          <div class="rating popupRate">
            <Fragment v-for="n in 5" :key="'p'+n">
              <input
                type="radio"
                :id="'pStar'+(6-n)"
                name="star"
                :value="6-n"
                :checked="(6-n) == feedback.rating"
              />
              <label
                :for="'pStar'+(6-n)"
                @click="handleRating(6-n)"
                title="text"
              >{{6-n}} stars {{feedback.rating}}</label>
            </Fragment>
          </div>
        </div>
        <div class="lowRatingFeedback">
          <p class="text-info text-center">
            <small>Let us know what went wrong</small>
          </p>
          <div class="predefinedFeedbacks d-flex flex-wrap justify-content-center">
            <div
              class="btn-group-toggle"
              data-toggle="buttons"
              v-for="(point, index) in feedback.improvePoints"
              :key="index"
            >
              <label
                class="btn"
                :class="{'active': feedback.selectedImprovePoint.indexOf(point) > -1}"
                @click.prevent="pushPoint(point)"
              >{{ point }}</label>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-10 mt-3">
              <textarea
                class="form-control"
                ref="feedbackTxt"
                id="exampleFormControlTextarea1"
                placeholder="Something else you want to say?"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-10 mb-3 mt-3 justify-content-end d-flex">
            <button type="submit" class="btn btn-success" @click.prevent="feedbackSubmit">Submit</button>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { Fragment } from "vue-fragment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/styles/overwrite-bootstrap.css";
import "@/views/setup/style.less";
import "./congrats.less";
import { mapState, mapActions } from "vuex";
import SetupList from "@/components/congrats/SetupList";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: "Congrats",
  components: { Fragment, SetupList },
  data: function() {
    return {
      live: true,
      feedback: {
        rating: null,
        selectedImprovePoint: [],
        improvePoints: [
          "Don't like the look",
          "Can't find the things",
          "Too hard to use",
          "Missing feature",
          "Too slow to load",
          "Difficult to learn",
          "Others"
        ]
      },
      data: {
        rewards: null,
        popup: null,
        widget: null
      }
    };
  },
  computed: {
    ...mapState(["rewardsData", "popupData", "widgetData"])
  },
  methods: {
    ...mapActions([
      "saveSetupData",
      "getRewardsData",
      "getPopupData",
      "getWidgetData"
    ]),
    handleRating(rate) {
      this.feedback.rating = rate;
      if (this.feedback.rating < 5) {
        this.$bvModal.show("feedbackModal");
      } else {
        // PROCEED WITH CALL ON 5 STARS
      }
    },
    pushPoint(point) {
      if (this.feedback.selectedImprovePoint.indexOf(point) > -1) {
        let tempArr = this.feedback.selectedImprovePoint.filter(
          item => item !== point
        );
        this.feedback.selectedImprovePoint = tempArr;
      } else {
        this.feedback.selectedImprovePoint.push(point);
      }
    },
    feedbackSubmit() {
      let params = {
        rating: this.feedback.rating
      };
      if (this.feedback.selectedImprovePoint.length) {
        params.improvePoints = this.feedback.selectedImprovePoint;
      }
      if (this.$refs.feedbackTxt.value.length) {
        params.customfeed = this.$refs.feedbackTxt.value;
      }
      console.log(params);
      // PARAMS READY TO POST
      // POST CALL THEN
      this.$bvModal.hide("feedbackModal");
    }
  },
  mounted: function() {
    this.data.rewards = JSON.parse(JSON.stringify(this.rewardsData));
    this.data.popup = JSON.parse(JSON.stringify(this.popupData));
    this.data.widget = JSON.parse(JSON.stringify(this.widgetData));
  }
};
</script>

<style lang="less" scoped>
</style>