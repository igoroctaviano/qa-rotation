Feature: As a user I want the Home Page header to display the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers. In Portuguese version it should display: Home, Quem Somos Nós, O Que Fazemos, Portfólio, Parceiros, Carreiras.

Scenario Outline: As a user I want the Home Page header to display the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers.
    Given I visit Avenue Code website3
    Then I want the Home Page header to display the link "<link>"

    Examples:
        | link       |
        #| Home       |
        #| Who We Are |
        | What We Do |
        #| Portifolio |
        #| Partners   |
        #| Careers    |

Scenario Outline: As a user I want the Home Page header to display the following links: Home, Quem Somos Nós, O Que Fazemos, Portfólio, Parceiros, Carreiras.
    Given I visit Avenue Code website3
        And I switch the language to portuguese
    Then I want the Home Page header to display the link "<link>"

    Examples:
        | link           |
        #| Home           |
        #| Quem Somos Nós |
        | O Que Fazemos  |
        #| Portfólio      |
        #| Parceiros      |
        #| Carreiras      |