require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_index_url
    assert_response :success
  end

  test "should get components" do
    get pages_components_url
    assert_response :success
  end

  test "should get props" do
    get pages_props_url
    assert_response :success
  end

  test "should get states" do
    get pages_states_url
    assert_response :success
  end

  test "should get life_cycle" do
    get pages_life_cycle_url
    assert_response :success
  end

  test "should get inline_styles" do
    get pages_inline_styles_url
    assert_response :success
  end

  test "should get advanced" do
    get pages_advanced_url
    assert_response :success
  end

end
