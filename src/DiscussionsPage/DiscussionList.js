import React from 'react';
import {Icon, List, Typography} from "antd";

export class DiscussionList extends React.Component {
    render() {
        const {discussions} = this.props;
        const IconText = ({type, text, color}) => (
            <span>
            <Icon type={type} style={{marginRight: 8}} theme="twoTone" twoToneColor={color}/>
                {text}
        </span>
        );
        return <List
            bordered
            dataSource={discussions}
            itemLayout="vertical"
            renderItem={discussion => (
                <List.Item
                    actions={[
                        <IconText type="plus-circle" text={discussion.argumentPoints} color="#52c41a"
                                  key="plus-circle"/>,
                        <IconText type="minus-circle" text={discussion.conPoints} color="#eb2f96" key="minus-circle"/>,
                        <IconText type="message" text={discussion.args.length + discussion.cons.length}
                                  key="message"/>,
                    ]}>
                    <List.Item.Meta
                        title={<Typography.Text>{discussion.title}</Typography.Text>}
                        description={discussion.description}
                    />
                </List.Item>
            )}/>;
    }
}

