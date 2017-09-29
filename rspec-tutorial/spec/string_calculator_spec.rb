require "string_calculator"

# Always used at the top to put sepcs in a context
describe StringCalculator do

  describe ".add" do                             # class methods are prefixed with a dot (convention)
    context "given an empty string" do           # describes in which context add method is expected to return zero
      it "returns zero" do                       # RSpec's ways to say "test case"
        expect(StringCalculator.add "").to eql 0 # assertion with matcher
      end
    end

    context "" do
      it "returns 10" do
        expect(StringCalculator.add "10").to eq 10
      end
    end

    context "given '2, 4'" do
      it "returns 6" do
        expect(StringCalculator.add "2, 4").to eq 6
      end
    end

    context "given '17, 100'" do
      it "returns 117" do
        expect(StringCalculator.add "17, 100").to eq 117
      end
    end
  end

end