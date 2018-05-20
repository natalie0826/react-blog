import React from 'react';
import { Row, Col, Carousel } from 'antd';

import { PostCard } from '../../partials/PostCard/PostCard';

export default class ByCategory extends React.Component {



    state = {
        value: 1,
      }
      onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }

      render() {
    return (



        <div>
        {/* header posts */}


        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {/* Programming */}
                <div className="category-block">
                    {/* <PostHorizontal image="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&s=56f62ac759295d695dd71968a3898038&auto=format&fit=crop&w=1350&q=80" /> */}
                    {/* <PostHorizontal image="https://images.unsplash.com/photo-1465418031253-26bca286214c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=284e0fe02655381cd6c04e42d2926e1b&auto=format&fit=crop&w=750&q=80" /> */}
                </div>

                {/* WEB SITE DEV */}
                <div className="category-block">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <PostCard id="13" title="Grids in 2018" image="https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c78d974035d9004d17ef36bda865394d&auto=format&fit=crop&w=763&q=80" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <PostCard id="14" title="Do your best every day" image="https://images.unsplash.com/photo-1522199696220-f42195d8b7fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0942b0905adcc3cf9f7b7b4f78bc1ddf&auto=format&fit=crop&w=1052&q=80" />
                        </Col>
                    </Row>
                </div>

                {/* GAME SITE DEV */}
                <div className="category-block">
                    <Carousel autoplay style={{'height': '300px'}}>
                    <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider" >
                                    <img src="https://images.unsplash.com/photo-1517696073804-9ce92f44f35d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b44cd9f577bca7b27a459613e2d179d&auto=format&fit=crop&w=1351&q=80" alt=""/>
                                                                        </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider">
                                        <img src="https://images.unsplash.com/photo-1516741247836-f66dfdfd1b22?ixlib=rb-0.3.5&s=7ae18737a6e556097cb3f191fd5daf5e&auto=format&fit=crop&w=599&q=80" alt="Headshot of Thomas Jefferson" />
                                    </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider">
                                        <img src="https://images.unsplash.com/photo-1508240155128-3b7b40767aa1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765113db149d05d2a9b69bdca93ef10f&auto=format&fit=crop&w=732&q=80" alt="Headshot of Thomas Jefferson" />
                                    </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider">
                                        <img src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1a50de939164e2523f33bfae3041b30&auto=format&fit=crop&w=750&q=80" />
                                    </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>
                    </Carousel>
                </div>

                {/* CAREERS IN IT */}
                <div className="category-block">

                    {/* <PostHorizontal id="11" image="https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc1407c2a550b0ebf3def8b81fa7b4a2&auto=format&fit=crop&w=766&q=80" /> */}
                    {/* <PostHorizontal id="12"  image="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-0.3.5&s=76fbdf2a268252eb9d7c7dbd55f445dc&auto=format&fit=crop&w=1350&q=80" /> */}
                </div>

                {/* INTERFACES */}
                <div className="category-block">

                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            {/* <PostVerticalLittle id="10" image="https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a034088c9404865910b97a6cf6b757ae&auto=format&fit=crop&w=755&q=80" /> */}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            {/* <PostVerticalLittle id="9" image="https://images.unsplash.com/photo-1479086761357-0f42edf085d6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a4014dc02d2b09c1fffd0021779ba4b&auto=format&fit=crop&w=1350&q=80" /> */}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            {/* <PostVerticalLittle id="8" image="https://images.unsplash.com/photo-1473445361085-b9a07f55608b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8dccca34a41c87fef98e6ca7957126b&auto=format&fit=crop&w=1384&q=80" /> */}
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            {/* <PostVerticalLittle id="7" image="https://images.unsplash.com/photo-1452882033718-1caccfcfe77f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=708f34173ac80f38915a391675034ba7&auto=format&fit=crop&w=750&q=80" /> */}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            {/* <PostVerticalLittle id="6" image="https://images.unsplash.com/photo-1521020814872-f1ead927ef95?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=436ec40e656eb77cf412bf626645748b&auto=format&fit=crop&w=1360&q=80" /> */}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            {/* <PostVerticalLittle id="5" image="https://images.unsplash.com/photo-1499334844006-d49df7788949?ixlib=rb-0.3.5&s=f18027a7b732c774f7464bf9d6495794&auto=format&fit=crop&w=1350&q=80" /> */}
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {/* Programming */}
                <div className="category-block">
                    {/* <PostHorizontal image="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&s=56f62ac759295d695dd71968a3898038&auto=format&fit=crop&w=1350&q=80" /> */}
                    {/* <PostHorizontal image="https://images.unsplash.com/photo-1465418031253-26bca286214c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=284e0fe02655381cd6c04e42d2926e1b&auto=format&fit=crop&w=750&q=80" /> */}
                </div>

                {/* WEB SITE DEV */}
                <div className="category-block">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <PostCard id="13" title="Grids in 2018" image="https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c78d974035d9004d17ef36bda865394d&auto=format&fit=crop&w=763&q=80" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <PostCard id="14" title="Do your best every day" image="https://images.unsplash.com/photo-1522199696220-f42195d8b7fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0942b0905adcc3cf9f7b7b4f78bc1ddf&auto=format&fit=crop&w=1052&q=80" />
                        </Col>
                    </Row>
                </div>

                {/* GAME SITE DEV */}
                <div className="category-block">
                {/* <PostHorizontal image="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&s=56f62ac759295d695dd71968a3898038&auto=format&fit=crop&w=1350&q=80" /> */}
                </div>

                {/* CAREERS IN IT */}
                <div className="category-block">

                    {/* <PostHorizontal id="11" image="https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc1407c2a550b0ebf3def8b81fa7b4a2&auto=format&fit=crop&w=766&q=80" /> */}
                    {/* <PostHorizontal id="12"  image="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-0.3.5&s=76fbdf2a268252eb9d7c7dbd55f445dc&auto=format&fit=crop&w=1350&q=80" /> */}
                </div>
            </Col>
        </Row>
        </div>
    )
}
}
