require 'test_helper'

# See:  https://www.rubydoc.info/gems/react-rails/2.5.0

class HelloWorldControllerTest < ActionDispatch::IntegrationTest
    test "should get index" do
    get hello_world_index_url
    assert_response :success
  end

  test 'assert_react_component' do
    get "/hello_world/index.html"
    assert_equal 200, response.status

    # assert rendered react component and check the props
    assert_react_component "HelloWorld" do |props|
      assert_equal "Hello from react-rails.", props[:greeting]
      assert_equal "react-rails", props[:info][:name]
      assert_select "[class=?]", "hello-world"
    end

    # or just assert component rendered
    assert_react_component "HelloWorld"
  end
end