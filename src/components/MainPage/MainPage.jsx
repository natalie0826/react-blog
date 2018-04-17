import React from 'react';
import { Row, Col, Icon, Divider, Button } from 'antd';

import './MainPage.css';

export const MainPage = () => {
    return (
        <div>
        {/* header posts */}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                        <div className="card">
                            <div className="card__image">
                                <img src="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" alt="" />
                            </div>
                            <div className="card__description">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                            <span class="line _short"></span> */}
                                    <h1 className="info__title">Some more posts</h1>
                                    <div className="info__subtitle">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                    <hr className="info__divider" />
                                    <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="card card--first">
                            <div className="card__image">
                                <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-0.3.5&s=177fa5618e070b6d13cf5debd2034426&auto=format&fit=crop&w=772&q=80" alt="" />
                            </div>
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__image">
                                <img src="https://images.unsplash.com/photo-1522199696220-f42195d8b7fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0942b0905adcc3cf9f7b7b4f78bc1ddf&auto=format&fit=crop&w=1052&q=80" alt="" />
                            </div>
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="recent-posts">
                            <p className="recent-posts__divider">
                                <span className="recent-posts__title">RECENT POSTS</span>
                                <span className="recent-posts__divider"></span>
                            </p>
                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image">
                                        <img src="https://images.unsplash.com/photo-1520971081497-3aa1750677b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36a8afdeed4add3bcaf131b88f568fea&auto=format&fit=crop&w=750&q=80" alt="Headshot of Thomas Jefferson" />
                                    </div>
                                    <div className="post-img__text">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-posts__button">
                                <Button type="dashed" size="large" className="recent-posts__button--purple">More</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        {/* two posts */}
        <br/>
        <br/>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className="post-horizontal">
                    <div className="post-horizontal__image">
                        <img src="https://images.unsplash.com/photo-1516549843585-2c4cf2e073d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f780a0e96db11669bc73e99f35c5e437&auto=format&fit=crop&w=392&q=80" alt="" />
                    </div>
                    <div className="post-horizontal__description">
                        <div className="card__description">
                            <div className="info">
                                {/* <span class="line _long"></span>
                        <span class="line _short"></span> */}
                                <h1 className="info__title">Some more posts</h1>
                                <div className="info__subtitle">
                                    <span>Pina Chaudhary</span>
                                    <span> - </span>
                                    <span className="info__subtitle--light">15 jul 2018</span>
                                </div>
                                <hr className="info__divider" />
                                <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                                <Divider />
                                <div className="info__footer">
                                    <span className="info__comments">
                                        <Icon type="message" />5 comments
                                    </span>
                                    <span className="info__time-read">
                                        <Icon type="dashboard" />3 minutes read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className="post-horizontal">
                    <div className="post-horizontal__image">
                        <img src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd4d735954f33290fbf984e4eb7abe32&auto=format&fit=crop&w=967&q=80" alt="" />
                    </div>
                    <div className="post-horizontal__description">
                        <div className="card__description">
                            <div className="info">
                                {/* <span class="line _long"></span>
                        <span class="line _short"></span> */}
                                <h1 className="info__title">Some more posts</h1>
                                <div className="info__subtitle">
                                    <span>Pina Chaudhary</span>
                                    <span> - </span>
                                    <span className="info__subtitle--light">15 jul 2018</span>
                                </div>
                                <hr className="info__divider" />
                                <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                                <Divider />
                                <div className="info__footer">
                                    <span className="info__comments">
                                        <Icon type="message" />5 comments
                                    </span>
                                    <span className="info__time-read">
                                        <Icon type="dashboard" />3 minutes read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
        /*
        <!-- programming post -->
        <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <app-programming></app-programming>
                <app-website-dev></app-website-dev>
                <app-game-dev></app-game-dev>
                <app-career-in-it></app-career-in-it>
                <app-interfaces></app-interfaces>    
                <app-latest-posts></app-latest-posts>
            </div>
        
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <!--more popular-->
                <div class="header-title">
                    <h2 class="title">More popular</h2>
                </div>
                <!-- 01 -->
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h3 class="more-popular-numb">01</h3>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h2 class="more-popular-title">What about Frontend?</h2>
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <span class="date-post">12 April</span>
                        <span class="read-post">&bull; 05 min read</span>
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <span class="comments-post">12</span>
                    </div>
                </div>
        
                <!-- 02 -->
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h3 class="more-popular-numb">02</h3>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h2 class="more-popular-title">What about Frontend?</h2>
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <span class="date-post">12 April</span>
                        <span class="read-post">&bull; 05 min read</span>
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <span class="comments-post">12</span>
                    </div>
                </div>
        
                <!-- 03 -->
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h3 class="more-popular-numb">03</h3>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h2 class="more-popular-title">What about Frontend?</h2>
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <span class="date-post">12 April</span>
                        <span class="read-post">&bull; 05 min read</span>
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <span class="comments-post">12</span>
                    </div>
                </div>
        
                <!-- 04 -->
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h3 class="more-popular-numb">04</h3>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h2 class="more-popular-title">What about Frontend?</h2>
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <span class="date-post">12 April</span>
                        <span class="read-post">&bull; 05 min read</span>
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <span class="comments-post">12</span>
                    </div>
                </div>
        
                <!-- 05 -->
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <h3 class="more-popular-numb">05</h3>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <h2 class="more-popular-title">What about Frontend?</h2>
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <span class="date-post">12 April</span>
                        <span class="read-post">&bull; 05 min read</span>
                        <i class="fa fa-comments" aria-hidden="true"></i>
                        <span class="comments-post">12</span>
                    </div>
                </div>
        
                <!--quiz-->
                <div class="header-title">
                        <h2 class="title">Quiz</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h3>What operating system are you using?</h3>
        
                            <mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
                            <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
                                {{season}}
                            </mat-radio-button>
                            </mat-radio-group>
                            <div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>
                            <button mat-raised-button color="primary">Add voice</button>
                        </div>
                </div>
        
        
        
                <!--top 10 tags-->
                <div class="header-title">
                    <h2 class="title">Top 10 tags</h2>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <mat-chip-list>
                            <mat-chip>Naan</mat-chip>
                            <mat-chip>Dal</mat-chip>
                            <mat-chip>Career in IT</mat-chip>
                            <mat-chip>Naan</mat-chip>
                            <mat-chip>Dal</mat-chip>
                            <mat-chip>Papadum</mat-chip>
                            <mat-chip>Bitcoin</mat-chip>
                            <mat-chip>Dal</mat-chip>
                            <mat-chip>Angular</mat-chip>
                            <mat-chip>Frontend</mat-chip>
                            <mat-chip>Naan</mat-chip>
                            <mat-chip>Dal</mat-chip>
                            <mat-chip>Career in IT</mat-chip>
                            <mat-chip>Naan</mat-chip>
                            <mat-chip>Dal</mat-chip>
                            <mat-chip>Papadum</mat-chip>
                            <mat-chip>Bitcoin</mat-chip>
                            <mat-chip>Dal</mat-chip>
                            <mat-chip>Angular</mat-chip>
                        </mat-chip-list>
                    </div>
                </div>
        
        
        
        
        
                <!--social-->
                <div class="header-title">
                    <h2 class="title">Social networks</h2>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ul class="social-links">
                            <button mat-mini-fab>
                                <i class="fa fa-vk" aria-hidden="true"></i>
                            </button>
                            <button mat-mini-fab>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </button>
                            <button mat-mini-fab>
                                <i class="fa fa-google-plus" aria-hidden="true"></i>
                            </button>
                            <button mat-mini-fab>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </button>
                            <button mat-mini-fab>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </button>
                        </ul>
                    </div>
                </div>
        
        
                <!--advertisement-->
                <div class="header-title">
                        <h2 class="title">Advertisement</h2>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <img class="img-responsive" src="https://images.unsplash.com/photo-1473122430480-d00e6dd25ba8?ixlib=rb-0.3.5&s=bca2535452db6c65e72b7026bf101ab8&auto=format&fit=crop&w=1350&q=80" alt="banner">
                    </div>
                </div>
        
        
        
            </div>
        </div>
        </div> */

    )
}
