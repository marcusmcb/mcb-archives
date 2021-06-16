MCB Archive Site.
2021, Marcus McBride.

Built with React, Amplify & Material-UI (so far).

Future dev:

* add a faint neon-glow/pulse backdrop to titlebar title
* ^ if that works, apply the same to hover on links
* add bevel to link bar, size height down just a smidge
* check ui on smaller vps (and xx/xl too)
* stream page for third panel? (clubjam, etc)
* add social/share link panel to each item
    ^ working, needs url formatting (react-share)

Data mgmt:

* added graphql via --> https://www.youtube.com/watch?v=kqi4gPfdVHY
* will store data for each page item, call/sort by category to relevant query

Data schema (Graph QL/DynamoDB):

ID (id)
title (string)
desc (string)
moreInfo (string)
filePath (string)
category (string)
createdAt (AWSDateTime)
updatedAt (AWSDateTime)