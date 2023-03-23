# Get-App-Token

This action enables you to get Authentication Token from your GitHub App Installation. With this token you will be able to access and perform actions on other repostiories, as long as they are added to the application scope and the App access rights are configured. 

In order for this to work you need to: 
1. Add all the needed repositories to the GitHub App Installation
2. Add Organizational Secrets: 
   - app-id
   - private-key
   - installation-id
3. Add the repository that will be using this action to the scope of above organizational secrets
4. Add following step to your GH Actions workflow:
  ```
  steps:
    ...
    # Obtain App Installation Token
    - name: Get-App-Token
      id: get-app-token
      uses: danone/mag.custom-action.get-app-token@main
      with:
        app-id: ${{ secrets.<SECRET_NAME> }}
        private-key: ${{ secrets.<SECRET_NAME> }}
        installation-id: ${{ secrets.<SECRET_NAME> }}
        
    # Next Step in which you use the token
    - name: Use-App-Token
      with:
        github-token: ${{ steps.get-app-token.outputs.app-token }}
      ...
  ```
