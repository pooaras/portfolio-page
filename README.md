visit the link:https://portfolio-page-git-master-pooaras.vercel.app/
<p>Also deployed in MS Azure <a href="https://pooaraz.azurewebsites.net/"> click here</a></p>
<pre>
For deploying follow the steps in the below link:
https://enlear.academy/how-to-deploy-react-app-on-azure-dbf36111cd54
</pre>
If routes not working create web.config file and add the below code in it
<p>
   
<?xml version="1.0"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_URI}" pattern="^/(api)" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration> 
</p>
