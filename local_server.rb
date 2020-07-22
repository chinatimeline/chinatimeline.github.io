# 运行服务器：bundle exec ruby local_server.rb

require 'sinatra'
require 'yaml'
require 'erb'
require 'securerandom'

fields = YAML.load(File.open('./_data/types.yml', &:read))
ratings = YAML.load(File.open('./_data/ratings.yml', &:read))

template = <<ERB
<html>
  <body>
    <label>选择事件分类</label>
    <select name="field" id="field-select">
      <% fields.keys.each do |field| %>
        <option value="<%= field %>"><%= field %></option>
      <% end %>
    </select>
    <% fields.keys.each do |field| %>
      <form method="POST" action="/submit" class="field-form" style="display:none" data-field="<%= field %>">
        <input name="fields[topic]" type="hidden" value="<%= field %>">
        <div class="col-6 col-s-6 comments">
          <div style="width:100%; display:table">
            <label style="display:table-cell;width=1px;">发生日期:</label> <input name="fields[date]" type="date" style="display:table-cell;"><br>
          </div>
          <div style="width:100%; display:table">
            <label style="display:table-cell;width=1px;">标题: </label><input name="fields[title]" type="text" cols="48"  placeholder="2-20字 不出现在互动图中"  style="display:table-cell; width:100%"><br>
          </div>
          <div style="width:100%; display:table">
            <label style="display:table-cell;width=1px;">重要性:</label>
            <span stype="display:table-cell;width=100%;">
              <% ratings.keys.each do |i| %>
                <input name="fields[significance]" type="radio" value="<%= i %>"> <%= i %>
              <% end %>
            </span>
          </div>
          <label>事件描述: </label><br><textarea name="fields[event]" rows="4" placeholder="20-100字的简要描述，包括具体的时间地点人物事件等。" class="event-description"></textarea><br>
          <div style="width:100%; display:table">
            <label  style="display:table-cell;width=1px;">新闻链接: </label><input name="fields[url]" type="url"  placeholder="可选 推荐添加以便审核"  style="display:table-cell; width:100%"><br>
          </div>
        </div>
        <div class="col-6 col-s-6 comments">
          <label style="display:table-cell;width=1px;">所属类型:</label>
            <% fields[field]['types'].each do |type| %>
              <input name="fields[type]" type="radio" value="<%= type %>"><%= type %><br>
            <% end %>
          <div style="width:100%; display:table">
            <label  style="display:table-cell;width=1px;">图片链接: </label><input name="fields[image]" type="url" style="display:table-cell; width:100%"  placeholder="可选项"><br>
          </div>
          <div style="width:100%; display:table">
            <label  style="display:table-cell;width=1px;">图片标题: </label><input name="fields[caption]" type="text" style="display:table-cell; width:100%"  placeholder="可选项"><br>
          </div>
          <input type="submit" value="点此提交">

        </div>
      </form>
    <% end %>
    <script>
      function showForm() {
        Array.from(document.querySelectorAll('.field-form')).map(f => f.style.display = 'none')
        let currentField = document.querySelector('#field-select').value
        document.querySelector(`.field-form[data-field=${currentField}]`).style.display = 'block'
      }
      document.querySelector('#field-select').addEventListener('change', showForm)
      showForm()
    </script>
  </body>
</html>
ERB

get '/' do
  ERB.new(template).result(binding)
end

post '/submit' do
  data = params['fields'].merge(
    _id: SecureRandom.uuid,
    submitTime: Time.now.to_i,
    significance: params[:fields]['significance'].to_i
  ).to_h
  yaml = YAML.dump(data)
  filename = "#{data['date']}-entry#{data['submitTime']}.yml"
  path = "./_data/comments/#{filename}"
  File.open(path, 'w'){|f| f.write yaml}
  "已保存到 #{path}"
end