import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Button, Tooltip, Tag, Divider } from 'antd';

import './PostView.css';

export default class PostView extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }
    
    handleScroll = () => {
        const postActions = document.getElementById('actions');
        const sticky = postActions.offsetTop;

        if (window.pageYOffset >= sticky && window.pageYOffset > 600) {
            postActions.classList.add("sticky");
        } else {
            postActions.classList.remove("sticky");
        }
    }

    render() {
        return (
            <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                <div className="post-container">
                    <div className="post">
                        <div>
                            <h5 className="post-category" style={{ 'color': '#673AB7' }} >category title</h5>
                            <h1 className="post-title">Everything You Need to Know About Painting Your House, Except for How to Do It</h1>
                            <h4 className="post-subtitle">Color, texture, finish, and your very soul</h4>
                        </div>  
                        <div className="post-author">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                            <div className="author-description">
                                <div>
                                    <span className="description-name">Pina Chaudhary</span>
                                    <Button type="dashed" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <div>
                                    <span className="description-date">15 jul 2018</span>
                                    <Icon type="eye-o" style={{ 'color': '#a5a5a5' }} />
                                    <span className="description-minutes">15 minutes read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-image" style={{ 'backgroundImage': 'url("https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-0.3.5&s=b8d36defbafd58b14ce1118574714b26&auto=format&fit=crop&w=1050&q=80")' }} />
                </div>
                <div className="post-text-container">
                    <div className="post-actions" id="actions">
                        <Tooltip title="I like it">
                            <Icon type="heart-o" style={{ 'fontSize': '2em', 'color': '#a5a5a5'}} />
                        </Tooltip>
                        <Tooltip title="Comment the post">
                            <Icon type="message" style={{ 'fontSize': '2em', 'color': '#a5a5a5'}} />
                        </Tooltip>
                        <Tooltip title="Share on Twitter">
                            <Icon type="twitter" style={{ 'fontSize': '2em', 'color': '#a5a5a5'}} /> 
                        </Tooltip>
                        <Tooltip title="Share on Facebook">
                            <Icon type="facebook" style={{ 'fontSize': '2em', 'color': '#a5a5a5'}} />   
                        </Tooltip>
                    </div>
                    <div className="post-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti adipisci neque corporis voluptatibus modi voluptates consequuntur, aperiam, veritatis accusamus incidunt reprehenderit! Nulla tempore officia magnam deserunt repellat porro iste! Dignissimos magnam porro, delectus debitis ex praesentium ut non, quas inventore ipsam quibusdam corrupti ipsum accusantium aliquam, vero animi. Animi excepturi facilis, doloremque
                        <p>repudiandae cupiditate sed esse reprehenderit deleniti culpa ipsa fugit minima vero odit provident corporis, nulla aliquid harum ipsam nobis repellendus eveniet totam molestiae. Sunt pariatur saepe minus in ad dolorum, iure laboriosam fuga corrupti eligendi deserunt perferendis voluptas dolores ratione tenetur, ipsa laborum accusamus porro. Iusto necessitatibus reiciendis laboriosam odio ratione totam</p>
                        erferendis voluptas molestiae nisi provident temporibus ducimus officia eveniet atque quia rerum minima, velit, ex illo ipsum optio unde quibusdam. Qui cupiditate nobis quae, officiis minima vel laboriosam neque labore animi rerum repellendus! Quasi consectetur a reprehenderit porro! Molestiae repellendus sint qui illo libero quibusdam nesciunt, hic tempora cupiditate nam voluptate eos, harum
                        <p>aliquid inventore, quasi et error excepturi consequatur? Non, consequatur. Quidem labore omnis reiciendis, consectetur est ut quam, totam soluta nisi error, nesciunt minus laudantium! Deleniti nihil cupiditate aut error quasi rerum veritatis suscipit quod provident iusto deserunt unde, beatae iste illum consectetur doloremque sit nobis dignissimos, alias culpa rem eaque itaque velit quae. Ipsum dolores reprehenderit ea fugiat est corrupti, atque veniam ullam nisi cupiditate eius voluptate, sit nihil eum quod blanditiis saepe consequatur a dolor. At, ut expedita odit magnam animi ipsa nihil asperiores natus veritatis iure facilis esse alias quia, ipsam necessitatibus fugiat in hic recusandae blanditiis iste? Quibusdam sint non molestiae eveniet debitis reiciendis natus voluptatem officiis numquam qui suscipit quidem tempora quis beatae illo adipisci, itaque eum neque. Culpa obcaecati fuga iusto eos, ad itaque atque magni quia saepe dolore illum omnis suscipit quisquam eligendi, ipsam libero nemo laboriosam incidunt? Vero incidunt excepturi autem aperiam repudiandae dolores, assumenda laborum velit ullam. Numquam, qui et? Nostrum cupiditate quae repellat officia hic commodi. Consequatur, numquam perspiciatis? Animi magni culpa rem voluptatum esse, repellat sunt eaque quam consectetur. Numquam nulla cupiditate nemo enim unde officiis. Ipsam expedita soluta exercitationem vitae asperiores fugit provident dolorem cumque consequatur maxime. Debitis quod reprehenderit ipsam optio sequi doloremque culpa quibusdam harum minima itaque veritatis quasi quisquam id dolorum et, illo nobis autem unde, cumque rerum, suscipit perspiciatis. Possimus eligendi sapiente dolore sed eos cupiditate culpa molestiae doloribus. Illo quam iusto est eligendi quaerat perspiciatis consequatur esse? Perspiciatis, repellat. In voluptatum odio soluta debitis voluptatem maxime illum harum architecto rerum modi nesciunt voluptates hic, delectus, excepturi, maiores inventore porro mollitia culpa reprehenderit necessitatibus asperiores deleniti veritatis ab sed! Similique accusamus voluptatibus, ullam recusandae deleniti qui, ducimus culpa beatae accusantium inventore hic iste impedit asperiores laboriosam voluptates libero? Est voluptate architecto numquam unde. Blanditiis officiis magnam sequi ad dolore beatae sint nobis voluptatem harum voluptas sit repellat ipsam provident vero consequuntur, cum nisi explicabo ipsum ea earum! Ratione qui sapiente et,</p>
                        tenetur quibusdam illo nisi soluta architecto, blanditiis dolorem vero perferendis velit, ipsa eius voluptatum nobis ducimus quasi sed quia numquam! Repellendus, enim laudantium? Nisi facilis, magnam neque minima consectetur, dolore odit perferendis quis distinctio itaque ut, quaerat sequi. Veniam sed optio blanditiis iusto maxime quae voluptates ipsum vero ratione! Necessitatibus magnam ad ut officia quis, corporis esse eaque earum nesciunt voluptatibus, tempore sapiente. Porro temporibus placeat dolorum quaerat, sunt cumque iure fuga necessitatibus optio a harum ratione! Tempora ut in, iusto sapiente, libero, aperiam porro doloribus quibusdam quia voluptatibus voluptas illo reiciendis delectus? Saepe, cupiditate asperiores! Praesentium optio quibusdam corporis deserunt. Inventore quis eius repudiandae laudantium quam laboriosam. Optio eum, vitae soluta dolor possimus quae mollitia provident explicabo? Dignissimos quia recusandae porro eum eveniet ab nihil ut sed quaerat, delectus adipisci est non maxime sequi, quis impedit nesciunt ratione nemo quasi eaque dicta quo dolores. Expedita amet ad aperiam asperiores in corrupti sequi ut quaerat natus, vel facere ex error perferendis eligendi sunt aliquam ducimus deserunt quas excepturi quis. Mollitia fugiat hic amet at repudiandae nisi quos debitis. Voluptatibus, velit aperiam ipsa deserunt fuga nostrum provident at ipsum rerum expedita nesciunt animi libero recusandae corporis facilis. Nostrum accusamus enim unde repudiandae voluptatibus. Neque hic dolorem totam doloremque veniam, tempore dolores error minima impedit aperiam praesentium similique?
                    </div>
                    <Divider />
                    <div className="post-additional">
                        <div className="post-author post-author__flex">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                            <div className="author-description">
                                <div>
                                    <span className="description-name">Pina Chaudhary</span>
                                    <Button type="dashed" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <div>
                                    <span className="description-date">15 jul 2018</span>
                                    <Icon type="eye-o" style={{ 'color': '#a5a5a5' }} />
                                    <span className="description-minutes">15 minutes read</span>
                                </div>
                            </div>
                        </div>
                        <div className="post-tags">
                            <Tag color="#673ab7">#natasha</Tag>
                            <Tag color="#673ab7">#frontend</Tag>
                            <Tag color="#673ab7">#horosami</Tag>
                            <Tag color="#673ab7">#flexbox</Tag>
                            <Tag color="#673ab7">#html</Tag>
                            <Tag color="#673ab7">#react</Tag>
                            <Tag color="#673ab7">#body</Tag>
                            <Tag color="#673ab7">#blog</Tag>
                            <Tag color="#673ab7">#more</Tag>
                            <Tag color="#673ab7">#programming</Tag>
                            <Tag color="#673ab7">#css</Tag>
                        </div>
                    </div>
                </div>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="post-text-container heading-container">
                        <Divider>
                            <h2 className="heading">Similiar posts</h2>
                        </Divider>
                    </div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Link to="/post/1" style={{ textDecoration: 'none' }}>
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
                            </Link>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Link to="/post/1" style={{ textDecoration: 'none' }}>
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
                            </Link>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Link to="/post/1" style={{ textDecoration: 'none' }}>
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
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="post-text-container heading-container">
                            <Divider>
                                <h2 className="heading">Comments</h2>
                            </Divider>
                        </div>
                        {/* <h3 *ngIf="!hasAnyComments">There are no comments. Be first!</h3> */}
                        {/* <div *ngIf="hasAnyComments"> */}
                        <div>
                            {/* <app-comment-view *ngFor="let comment of comments" [comment]="comment" [userId]="userId" (reply)="reply($event)"></app-comment-view> */}
                            {/* <ul class="comment">
                                <li class="text-justify">
                                    <div class="comment-body">
                                        <img src="http://via.placeholder.com/60x60" alt="user" class="img-responsive img-user">
                                        <a class="comment-remove" *ngIf="userId === comment.userId && !comment.isDeleted" (click)="openDialogDelete(comment.id, comment.postId)">
                                            <span class="glyphicon glyphicon-remove"></span>
                                        </a>
                                        <div class="comment-info">
                                            <span class="comment-author">{{comment.author}}</span>
                                            <span *ngIf="comment.previousId">to </span>
                                            <span *ngIf="comment.previousId" class="comment-author">{{comment.prevAuthor}}</span>
                                            <span class="comment-date">{{comment.dateUpdate | relativeDate}}</span>
                                            <p class="comment-info-text" *ngIf="!comment.isDeleted">{{comment.text}}</p>
                                            <p class="comment-info-text comment-deleted" *ngIf="comment.isDeleted">This comment has been removed by author.</p>
                                            <button class="comment-reply" *ngIf="userId && !comment.isDeleted" (click)="showFormComment()">Reply</button>
                                            <app-comment-create *ngIf="isShown" [previousCommentId]="comment.id" [userId]="userId" [postId]="comment.postId"></app-comment-create>
                                        </div>
                                    </div>
                                    <ul *ngIf="comment.children">
                                        <app-comment-view *ngFor="let comment of comment.children" [userId]="userId" [comment]="comment"></app-comment-view>
                                    </ul>
                                </li>
                            </ul> */}
                        </div>
                    </Col>
                </Row>
            </Row>
        );
    }
};

// <Link to="/post/1" style={{ textDecoration: 'none' }}>
// <div className="card">
//     <div className="card__image">
//         <img src="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" alt="" />
//     </div>
//     <div className="card__description">
//         <div className="info">
//             {/* <span class="line _long"></span>
//     <span class="line _short"></span> */}
//             <h1 className="info__title">Some more posts</h1>
//             <div className="info__subtitle">
//                 <span>Pina Chaudhary</span>
//                 <span> - </span>
//                 <span className="info__subtitle--light">15 jul 2018</span>
//             </div>
//             <hr className="info__divider" />
//             <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
//         </div>
//     </div>
// </div>
// </Link>
