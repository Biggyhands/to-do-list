import {Header as Head, Icon} from 'semantic-ui-react';

export default function Header(second) {
return(
    <div className="header">
        <Head as="h1" icon textAlign='center' color="violet">
            <Icon inverted color="violet" name="list alternate outline" circular/>
            <Head.Content>Task List</Head.Content>
        </Head>
    </div>
)
}