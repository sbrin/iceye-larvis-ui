## How To Run #1

Docker can do all the hustle:

`docker-compose up`

It will run the web server at `http://localhost:8080` with LARVIS API at `:8000`

## How to run #2

You can run both services separately. Just remember to run LARVIS at port `:8000`

To build UI go to `larvis-ui` folder, install packages and run dev server

```
cd ./larvis-ui/
yarn install
yarn start
```

## LARVIS Improvements

There is no way to ivalidate session or token. It could be useful by security reasons to generate new token on every login.

Acquisitions response:

-   should be sorted by date
-   should have a param to group by time intervals like hours or days
-   should support filtering by time frame
