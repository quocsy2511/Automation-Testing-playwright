# định nghĩa tính năng cần test
Feature: Login action

    As a user , I want login to the application

    # mô tả kịch bản
    # thiết lập bối cảnh ban đầu trước khi thực hiện hành động chính
    # mô tả hành động chính
    # kết quả mong đợi
    Scenario: Login with valid credentials
        Given I want to login to the application
        When I fill login form with valid credentials
        Then I should see the home page
    Scenario Outline: Try to login with invalid credentials
        Given I want to login to the application
        When I fill the login form with "<username>" and "<password>"
        Then I wait for the 3 seconds
        Examples:
            | username | password |
            | fail-1   | fail-1   |
            | fail-2   | fail-2   |
            | fail-3   | fail-3   |