# codefreak.org

This is the source code for www.codefreak.org. The homepage is made with React and `react-static`.

## Set up locally
A local setup requires nodejs and `yarn` for package management.

```shell script
$ yarn install # installs all dependecies
$ yarn start # starts a live-reload server on http://localhost:300 
```

## Build
The homepage is deployed as Docker image.
Use the following command in the project root to create a production build.

```shell script
docker build -t cfreak/homepage .
```

Check if the image is working as intended with the following command:
```shell script
docker run --rm -it -p 8080:80 cfreak/homepage
```

## License

    Code FREAK | Code Feedback Review & Evaluation Kit
    Copyright (C) 2019-2020 Kiel University of Applied Sciences

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.