import React, {Component} from 'react';
import Linkify from 'react-linkify';
import './UserFeed.css';
class UserFeed extends Component {


render() {

let userFeed = this.props.feedData
.map(function (feedData, index) {
return (
<div className="medium-12 columns" key={index}>

<div className="people-you-might-know">

<div className="row add-people-section">
<div className="small-12 medium-10 columns about-people">

<div className="about-people-author">
<p className="author-name">
<b>{this.props.name}</b>
<Linkify>{feedData.feed}</Linkify>
<br/>

</p>

</div>
</div>
<div className="small-12 medium-2 columns add-friend">

<div className="add-friend-action">
<button id="del" className="button small btn-color" onClick={this.props.deleteFeed} data={feedData.feed_id} value={this.props.index} >
<i className="fa fa-user-times" aria-hidden="true"></i>
Delete
</button>
</div>
</div>
</div>
</div>
</div>
)
}, this);

return (
<div>
{userFeed}

</div>
);
}

}

export default UserFeed;